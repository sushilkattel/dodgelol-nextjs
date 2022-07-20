import axios from "axios";
import { summonerDataQuery, summonerMatchlistQuery, summonerRankedQuery} from "./apiUtils";

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