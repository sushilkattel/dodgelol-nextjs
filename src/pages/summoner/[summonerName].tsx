import { Text, Image, HStack } from '@chakra-ui/react'
import { Container } from '../../components/Container'
import { Main } from '../../components/Main';
import { SummonerCard }from '../../components/SummonerCard';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import { summonerDataQuery } from '../../apiUtils/apiUtils';
import { callAPI } from '../../apiUtils/callAPI';
import { callRank } from '../../apiUtils/callRank';

const SummonerDetails = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState(undefined);
    const [ranked, setRanked] = useState([]);
    const [search, setSearch] = useState(false);
    const router = useRouter();
    const summonerName = "" + router.query.summonerName;
    console.log(router.query);
    const url = summonerDataQuery(summonerName);
    let state = "LOADING";
    let error = "LOADING";
    let dataJson = undefined;
    if(search) {
        const resp = callAPI(url);
        state = resp.state;
        error = resp.error;
        dataJson = resp.dataJson;
    }
    useEffect(() => {
        setSearch(true);
    }, [])

    useEffect(() => {
        if(state==="SUCCESS"){
            setData(dataJson);
            setLoading(false);
            console.log(JSON.stringify(data))
            console.log(error)
        }
    }, [state])
    /*
    useEffect(() => {
        const runData = async() => {
            setData(await dataAPI)
            setLoading(false);
        } 
        runData()
        if (data!= "ERROR") {
            const runRanked = async()=> {
                const jsonData = JSON.parse(JSON.stringify(data))
                const rankedAPI = await callRank(jsonData?.id)
                //setRanked(rankedAPI)
            }
            //runRanked()
        }
      }, [data]); */
    if(isLoading) {
        return (
            <Container height="100vh"> 
                <Text>Loading.</Text>
            </Container>
        ) 
    }
        //const jsonData = JSON.parse(data)
        const icon = data?.profileIconId?.toString();
        const name = data?.name?.toString();
        const lvl = data?.summonerLevel?.toString();
        return (
            <Container height="100vh">
                <Main>
                    <SummonerCard summonerIcon = {icon} summonerName = {name} summonerLvl = {lvl} />
                </Main>
            </Container>
        )
    
}

export default SummonerDetails