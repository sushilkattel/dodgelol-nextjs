import { list } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { summonerGameQuery } from "./apiUtils";
import { getGameData, getIndex } from ".";

//handles game data so it only returns whatever data is needed
export const summonerMatch = async (matchlist?: Array<string>, puuid?: string): Promise<any> => {

    const getAllGameData = matchlist.map(async (gameId) => {
        const response = await getGameData(gameId);
        return response
    })

    const results = await Promise.all(getAllGameData)
    console.log("NEW GAME DATA: ", results)
    return results
};
//Gives roles from user from matches
export const rolesMatchData = async (matchData?: Array<any>, puuid?: string) => {
    const getDetailedData = matchData.map(async (game) => {
        const index = getIndex(game, puuid);
        const summoner = game.info.participants[index];
        return JSON.stringify(summoner.lane)
    })
    const results:string[] = await Promise.all(getDetailedData)
    return results
}
//Gives specific data from existing data
//Data: [ChampName, ChampLvl, kills, deaths, assists, cs, timePlayed, lane, winBoolean]
export const previewGameData = async (matchData?: Array<any>, puuid?: string) => {
    const getPreviewData = matchData.map(async (game) => {
        let dataArray = []
        const index = await getIndex(game, puuid);
        const summoner = game.info.participants[index];
        dataArray.push(summoner.championName, summoner.champLevel, summoner.kills, summoner.deaths, summoner.assists, summoner.totalMinionsKilled, (Math.round(summoner.timePlayed / 60)), summoner.lane, summoner.win)
        return dataArray
    })
    const results = await Promise.all(getPreviewData)
    return results;
}

