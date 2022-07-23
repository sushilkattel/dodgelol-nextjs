import axios from "axios";
import { summonerDataQuery, summonerMatchlistQuery, summonerRankedQuery, summonerGameQuery} from "./apiUtils";

export const getSummonerData = async (username: string): Promise<any> => {
  const url = summonerDataQuery(username);
  try {
    let resp = await axios.get(url);
    if (resp.status === 200 && resp.data) {
      return resp.data;
    }
    return null;
  } catch (err) {
    console.error(`Error fetching summoner data: ${err}`);
    return null;
  }
};
export const getSummonerRanked = async (id: string): Promise<any> => {
  const url = summonerRankedQuery(id);
  try {
    let resp = await axios.get(url, {
      params: {
        api_key: process.env.NEXT_PUBLIC_API_KEY,
      }
    });
    if (resp.status === 200 && resp.data) {
      return resp.data;
    }
    return null;
  } catch(e) {
    console.log(`Error fetching summoner rank: ${e}`)
    return null
  }
};
export const getSummonerMatchList = async (puuid:string): Promise<any> => {
  const url = summonerMatchlistQuery(puuid)
  try {
    let resp = await axios.get(url, {
      params: {
        api_key: process.env.NEXT_PUBLIC_API_KEY,
      }
    });
    if (resp.status === 200 && resp.data) {
      return resp.data
    }
    return null
  } catch(e) {
    console.log('Error fetching summoner matchlist')
    return null
  }
  
}
export const getGameData = async (gameId?: string): Promise<any> => {
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
//Gets index of where the user is
export const getIndex = (matchData?: any, puuid?: any): any => {
  return matchData?.metadata?.participants?.findIndex(obj => obj === puuid);
}

//valorant test
export const getValorantLeaderboard = async (): Promise<any> => {
  const url = `http://localhost:3080/valorantLeaderboard?`
  try {
    let resp = await axios.get(url);
    if (resp.status === 200 && resp.data) {
      return resp.data;
    }
    return null;
  } catch (err) {
    console.error(`Error fetching summoner data: ${err}`);
    return null;
  }
}