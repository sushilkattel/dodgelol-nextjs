import React, { useEffect, useState } from "react";

export const callAPI =  (url: string) => {
    const [data, setData] = useState({
        state: "LOADING",
        error: "LOADING",
        dataJson: undefined
    });
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setData({
                    state: "SUCCESS",
                    error: "NO ERRORS",
                    dataJson: json
                })
            } catch (error) {
                setData({
                    state: "ERROR",
                    error: "Failed",
                    dataJson: undefined
                });
            }
        }
        getData();
    }, [])
    console.log('DATA, ', data)
    return data
    /*
    const [apiData, setAPIData] = useState("ERROR")
    try {
        const data = await fetch(url);
        let jsonData = await data.json();
        setAPIData(JSON.stringify(jsonData));
    } catch (error) {
        setAPIData("ERROR");
    }
    return apiData; */
}