import axios from "axios";
import { summonerDataQuery } from "./apiUtils";

export const getSummonerData = async (username: string): Promise<any> => {
  const url = summonerDataQuery(username);
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
    console.error(`Error fetching summoner data: ${err}`);
    return null;
  }
};
