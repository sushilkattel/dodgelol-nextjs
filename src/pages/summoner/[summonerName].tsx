import { Text, Image, HStack, Box, useColorModeValue, Stack} from "@chakra-ui/react";
import { Container } from "../../components/Container";
import { Main } from "../../components/Main";
import { SummonerCard } from "../../components/SummonerCard";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getSummonerData, getSummonerMatchList, getSummonerRanked } from "../../apiUtils";
import { StatCs } from "../../components/StatCs";
import { summonerMatch } from "../../apiUtils/summonerMatch";

const SummonerDetails = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(undefined);
  const [ranked, setRanked] = useState([]);
  const [matchData, setMatchData] = useState([])
  const router = useRouter();

  useEffect(() => {
    const summonerName = router.query?.summonerName?.toString() || "";
    const fetchData = async () => {
      const resp = await getSummonerData(summonerName);
      if (resp) {
        setData(resp);
        setLoading(false);
        fetchRank(resp.id)
        console.log("RESPONSE: ", resp)
        fetchMatchList(resp.puuid)
        console.log("MATCH DATA: ", matchData)
        return true
      }

    };
    const fetchRank = async (id?: string) => {
      const resp = await getSummonerRanked(id)
      if(resp) {
        setRanked(resp)
        setLoading(false)
        return true
      }
    }
    const fetchMatchList =async (puuid?: string) => {
      const resp = await getSummonerMatchList(puuid)
      if(resp) {
        const newResp  = summonerMatch(JSON.stringify(resp));
        setMatchData(await newResp)
      }
      
    }

    if (summonerName) {
      fetchData()
    }
  }, [router]);

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
      <Main alignSelf={'baseline'} marginLeft={'2em'}>
        <HStack>
        <SummonerCard
          summonerIcon={icon}
          summonerName={name}
          summonerLvl={lvl}
          sQueue={ranked[0]?.queueType}
          sTier={ranked[0]?.tier}
          sRank={ranked[0]?.rank}
          sLp={ranked[0]?.leaguePoints}
          sWin={ranked[0]?.wins}
          sLoss={ranked[0]?.losses}
          fQueue={ranked[1]?.queueType}
          fTier={ranked[1]?.tier}
          fRank={ranked[1]?.rank}
          fLp={ranked[1]?.leaguePoints}
          fWin={ranked[1]?.wins}
          fLoss={ranked[1]?.losses}
        />
        <Stack 
          maxW={"20vw"}
          w={"70vw"}
          maxH={"100%"}
          h={"100%"}>
          <Box
            marginLeft={10}
            maxW={"65vw"}
            w={"70vw"}
            maxH={"80vh"}
            h={"100vh"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"lg"}
            overflow={"hidden"}
          >
            <Stack
              maxW={"25vw"}
              w={"70vw"}
              maxH={"100%"}
              h={"60%"}
              ml={10}
            >
              <StatCs 
              sLp={ranked[0]?.leaguePoints.toString()}/>
            </Stack>
        </Box>
        </Stack>
        </HStack>
      </Main>
    </Container>
  );
};

export default SummonerDetails;
