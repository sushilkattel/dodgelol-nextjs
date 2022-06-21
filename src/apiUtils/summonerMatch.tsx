import axios from "axios";
import { summonerGameQuery } from "./apiUtils";

//handles game data so it only returns whatever data is needed
export const summonerMatch = async (matchlist?: Array<string>): Promise<any> => {
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
    const getAllGameData = (): any => {
        matchlist
        const matchListArray = matchlist;
        Promise.all(matchListArray.map(async (gameId) => {
            const response = await gameQuery(gameId);
            const data = response
            return data;
        })).then((values) => {
            console.warn('values: ', JSON.stringify(values));
            return values
            })
    /*
    const gameHandler =async () => {
        
        
    } */
    }
    getAllGameData();
};