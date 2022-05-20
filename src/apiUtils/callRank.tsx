import { useState } from "react";

export const callRank = (id: string) => {
    const [apiData, setAPIData] = useState("")
    /*
    try {
        const url = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${id}?api_key=RGAPI-78b2ac34-7747-4aed-800b-076bf844470d`;
        const data = await fetch(url);
        let jsonData = await data.json();
        setAPIData(jsonData);
    } catch (error) {
        setAPIData([]);
    } */
    return apiData;
}