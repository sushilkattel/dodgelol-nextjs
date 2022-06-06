import axios from "axios";
import { summonerGameQuery } from "./apiUtils";

//handles game data so it only returns whatever data is needed
export const summonerMatch = async (matchlist?: String): Promise<any> => {
    //gets game data
    const gameQuery = async (gameId?: string): Promise<any> => {
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
        const matchListArray = matchlist.split(',');
        Promise.all(matchListArray.map(async (gameId) => {
            const response = await gameQuery(gameId);
            const data = response.json();
            return data;
        })).then((values) => {
            console.warn('values: ', JSON.stringify(values));
            return values
            })
    getAllGameData();
    /*
    const gameHandler =async () => {
        
        
    } */
    }
};