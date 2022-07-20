import { list } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { summonerGameQuery } from "./apiUtils";

//handles game data so it only returns whatever data is needed
export const summonerMatch = async (matchlist?: Array<string>, puuid?: string): Promise<any> => {
    
    //gets game data
    const gameQuery = async (gameId?: string): Promise<any> => {
        console.log("GAME ID: ", gameId)
        const url = summonerGameQuery(gameId);
        try {
            let resp = await axios.get(url, {
            params: {
                api_key: process.env.NEXT_PUBLIC_API_KEY,
            },
            });
            if (resp.status === 200 && resp.data) {
            return resp.data;
            }
            return null;
        } catch (err) {
            console.error(`Error fetching summoner game data: ${err}`);
            return null;
        }   
    }
    const getIndex = (matchData?: any, puuid?: any): any => {
        return matchData?.metadata?.participants?.findIndex(obj => obj === puuid);
    }
    const getAllGameData = (matchListArray?: any, puuid?: any): any => {
        Promise.all(matchListArray.map(async (gameId) => {
            var dataArray = []
            const response = await gameQuery(gameId);
            const data = response
            const index = await getIndex(data, puuid)
            console.log("PUUID LOL: ", puuid)
            const summoner = data.info.participants[index];
            //populate array
            //Data: [ChampName, ChampLvl, kills, deaths, assists, cs, timePlayed, lane, winBoolean]
            dataArray.push(summoner.championName, summoner.champLevel, summoner.kills, summoner.deaths, summoner.assists, summoner.totalMinionsKilled, (Math.round(summoner.timePlayed / 60)), summoner.lane, summoner.win)
            return dataArray;
        })).then((values) => {
            console.warn('values: ', JSON.stringify(values));
            return values
            })
    }
    const returnData = await getAllGameData(matchlist, puuid)
    const checkData = (): any => {
        console.log("CHECKING DATA", returnData)
    }
    checkData()
    return returnData
};