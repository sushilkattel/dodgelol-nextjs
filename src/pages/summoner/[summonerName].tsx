import { Text, Image, HStack } from "@chakra-ui/react";
import { Container } from "../../components/Container";
import { Main } from "../../components/Main";
import { SummonerCard } from "../../components/SummonerCard";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getSummonerData } from "../../apiUtils";

const SummonerDetails = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(undefined);
  const [ranked, setRanked] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const summonerName = router.query?.summonerName?.toString() || "";
    const fetchData = async () => {
      const resp = await getSummonerData(summonerName);
      if (resp) {
        setData(resp);
        setLoading(false);
      }
    };
    if (summonerName) {
      fetchData();
    }
  }, [router]);
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
  if (isLoading) {
    return (
      <Container height="100vh">
        <Text>Loading.</Text>
      </Container>
    );
  }
  //const jsonData = JSON.parse(data)
  const icon = data?.profileIconId?.toString();
  const name = data?.name?.toString();
  const lvl = data?.summonerLevel?.toString();
  return (
    <Container height="100vh">
      <Main>
        <SummonerCard
          summonerIcon={icon}
          summonerName={name}
          summonerLvl={lvl}
        />
      </Main>
    </Container>
  );
};

export default SummonerDetails;
