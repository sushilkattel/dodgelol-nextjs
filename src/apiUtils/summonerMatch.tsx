import { list } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { summonerGameQuery } from "./apiUtils";
import { getGameData, getIndex } from ".";

//handles game data so it only returns whatever data is needed
export const summonerMatch = async (matchlist?: Array<string>, puuid?: string): Promise<any> => {
  const getAllGameData = matchlist.map(async gameId => {
    const response = await getGameData(gameId);
    return response;
  });

  const results = await Promise.all(getAllGameData);
  console.log("NEW GAME DATA: ", results);
  return results;
};
//Gives roles from user from matches
export const rolesMatchData = async (matchData?: Array<any>, puuid?: string) => {
  const getDetailedData = matchData.map(async game => {
    const index = getIndex(game, puuid);
    const summoner = game.info.participants[index];
    if (
      game.info.gameMode == "ARAM" ||
      game.info.gameMode == "ULTBOOK" ||
      game.info.gameMode == "URF" ||
      summoner.lane == "NONE"
    ) {
      return '"ARAM"';
    }
    else if (summoner.lane == "BOTTOM") {
        if(index == 8) {
          return '"BOTTOM"';
        }
        return '"SUPPORT"';
    }
    return JSON.stringify(summoner.lane);
  });
  const results: string[] = await Promise.all(getDetailedData);
  //Turns Roles into a dictionary
  const roleDictionary = async (stringList: string[]) => {
    var dict = {};
    var top = 0;
    var mid = 0;
    var bottom = 0;
    var jg = 0;
    var aram = 0;
    var supp = 0;
    const roles = stringList;
    for (let i = 0; i < roles.length; i++) {
      console.log("ROLE: ", roles[i]);
      switch (roles[i]) {
        case '"TOP"':
          top++;
          break;
        case '"MIDDLE"':
          mid++;
          break;
        case '"BOTTOM"':
          bottom++
          break;
        case '"JUNGLE"':
          jg++;
          break;
        case '"ARAM"':
          aram++;
          break;
        case '"SUPPORT"':
          supp++;
          break;
      }
    }
    dict["top"] = top;
    dict["mid"] = mid;
    dict["bottom"] = bottom;
    dict["jg"] = jg;
    dict["aram"] = aram;
    dict["supp"] = supp;
    return dict;
  };
  console.log("RESULT PRE DICT: ", results);
  const resultDict = await roleDictionary(results);
  console.log("DICTIONARY: ", resultDict);
  return resultDict;
};
//Gives specific data from existing data
//Data: [ChampName, ChampLvl, kills, deaths, assists, cs, timePlayed, lane, winBoolean, gameEndTime, gameMode]
export const previewGameData = async (matchData?: Array<any>, puuid?: string) => {
  const queueIdList = {};
  queueIdList[420] = "Ranked Solo";
  queueIdList[440] = "Ranked Flex";
  queueIdList[450] = "ARAM";
  queueIdList[430] = "BLIND PICK";
  queueIdList[0] = "CUSTOM";
  queueIdList[72] = "HEXAKILL";
  queueIdList[76] = "URF";
  queueIdList[78] = "OFA";
  queueIdList[83] = "BOT OFA";
  queueIdList[700] = "CLASH";
  queueIdList[900] = "ARURF";
  queueIdList[400] = "NORMAL";

  const getPreviewData = matchData.map(async game => {
    let dataArray = [];
    const index = await getIndex(game, puuid);
    const summoner = game.info.participants[index];
    dataArray.push(
      summoner.championName,
      summoner.champLevel,
      summoner.kills,
      summoner.deaths,
      summoner.assists,
      summoner.totalMinionsKilled,
      summoner.timePlayed,
      summoner.lane,
      summoner.win,
      game.info.gameEndTimestamp,
      queueIdList[game.info.queueId],
    );
    console.log("QUEUE NAMES: ", queueIdList[game.info.queueId], game.info.queueId);
    return dataArray;
  });
  const results = await Promise.all(getPreviewData);
  return results;
};
