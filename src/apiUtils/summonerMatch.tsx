import { list } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { summonerGameQuery } from "./apiUtils";
import { getGameData, getIndex } from ".";

//handles game data so it only returns whatever data is needed
export const summonerMatch = async (matchlist?: Array<string>, puuid?: string): Promise<any> => {
    
    const getNewGameData = matchlist.map(async (gameId) => {
        var dataArray = []
        const response = await getGameData(gameId);
        const data = response
        const index = await getIndex(data, puuid)
        console.log("PUUID LOL: ", puuid)
        const summoner = data.info.participants[index];
        //populate array
        //Data: [ChampName, ChampLvl, kills, deaths, assists, cs, timePlayed, lane, winBoolean]
        dataArray.push(summoner.championName, summoner.champLevel, summoner.kills, summoner.deaths, summoner.assists, summoner.totalMinionsKilled, (Math.round(summoner.timePlayed / 60)), summoner.lane, summoner.win)
        return dataArray;
    })
    const results = await Promise.all(getNewGameData)
    console.log("NEW GAME DATA: ", results)
    return results
};
//Gives specific data from existing data
//Data: [ChampName, ChampLvl, kills, deaths, assists, cs, timePlayed, lane, winBoolean]
export const previewGameData = async (matchData?: Array<any>, puuid?: string) => {
    var dataArray = []
    matchData.map(async (game) => {
        const index = await getIndex(game, puuid);
        const summoner = game.info.participants[index];
        dataArray.push(summoner.championName, summoner.champLevel, summoner.kills, summoner.deaths, summoner.assists, summoner.totalMinionsKilled, (Math.round(summoner.timePlayed / 60)), summoner.lane, summoner.win)
    })
    return dataArray
}

