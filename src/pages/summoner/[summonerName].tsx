import { Text, Image, HStack, Box, useColorModeValue, Stack, Divider, Flex, VStack} from "@chakra-ui/react";
import { Container } from "../../components/Container";
import { Main } from "../../components/Main";
import { SummonerCard } from "../../components/SummonerCard";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getSummonerData, getSummonerMatchList, getSummonerRanked } from "../../apiUtils";
import { StatCs } from "../../components/StatCs";
import { previewGameData, rolesMatchData, summonerMatch } from "../../apiUtils/summonerMatch";
import axios from "axios";
import { MatchCard } from "../../components/MatchCard";
import { match } from "assert";
import { StatRoles } from "../../components/StatRoles";

const SummonerDetails = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(undefined);
  const [ranked, setRanked] = useState([]);
  const [matchData, setMatchData] = useState([])
  const [roleData, setRoleData] = useState([])
  const router = useRouter();
  //const jsonData = JSON.parse(data)
  const icon = data?.profileIconId?.toString();
  const name = data?.name?.toString();
  const lvl = data?.summonerLevel?.toString();
  const bgColor = useColorModeValue("white", "gray.800");
  
  useEffect(() => {
    const summonerName = router.query?.summonerName?.toString() || "";
    const fetchData = async () => {
      const resp = await getSummonerData(summonerName);
      if (resp) {
        setData(resp);
        await fetchRank(resp.id)
        console.log("RESPONSE: ", resp)
        await fetchMatchList(resp.puuid)
        console.log("MATCH DATA: ", matchData)
        return true
      }

    };
    const fetchRank = async (id?: string) => {
      const resp = await getSummonerRanked(id)
      if(resp) {
        setRanked(resp)
        return true
      }
    }
    const fetchMatchList = async (puuid?: string) => {
      const resp = await getSummonerMatchList(puuid)
      if(resp) {
        console.log("MATCHLIST: ", resp);
        await updateGameData(resp, puuid)
        return true
      }
      
    }
    const updateGameData = async (data?: any, puuid?: string) => {
      const summData = await summonerMatch(data, puuid);
      const summPreview = await previewGameData(summData, puuid)
      const roles = await rolesMatchData(summData, puuid)
      setMatchData(summPreview)
      setRoleData(roles)
      setLoading(false)
      console.log("testData: ", matchData)
      //await summonerMatch(data, puuid).then((value) => console.log("TEST VALUE PLS WORK: ", value))
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

  return (
    <Container height="100vh">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      </style>
      <Main alignSelf={'baseline'} marginLeft={'2em'} pt={'8em'}>
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
          maxW={"100vw"}
          mt={'10'}
          w={"70vw"}
          maxH={"100%"}
          h={"100%"}>
          <Box
            marginLeft={10}
            maxW={"65vw"}
            w={"70vw"}
            maxH={"80vh"}
            h={"78vh"}
            bg={bgColor}
            boxShadow={"2xl"}
            rounded={"lg"}
            overflow={"hidden"}
            overflowY={'auto'}
          >
            <HStack w={'80vw'} h={'60%'} ml={10}>
            <Stack
              maxW={"50%"}
              w={"100%"}
              maxH={"50%"}
              h={"100%"}
            >
              <StatCs 
              sLp={ranked[0]?.leaguePoints.toString()}/>
            </Stack>
            <Stack
              maxW={"50%"}
              w={"100%"}
              maxH={"50%"}
              h={"100%"}>

            </Stack>
            </HStack>
           
            <Divider alignSelf={'center'} mt={'-10'}/>
              <Stack w={'auto'} height={'auto'}>
              <Text fontFamily={'Bebas Neue'} fontSize={48} color={'#15172A'}>MATCH <br />History</Text>
              <HStack>
                <Flex ml={'14%'} mt={'-15%'}>
                <Box
                  maxW={"max-content"}
                  w={"max-content"}
                  maxH={"max-content"}
                  h={"max-content"}
                  bg={'white'}
                  rounded={"3xl"}
                  overflow={"hidden"}
                  overflowY={'auto'}
                  alignSelf={'center'}
                  alignContent={'center'}
                  alignItems={'center'}
                >
                  {/*matchData.map(game => (
                  <MatchCard 
                    champion={game[0]} 
                    kills={game[2]} 
                    deaths={game[3]} 
                    assists={game[4]} 
                    cs={game[5]} 
                    time={game[6]} 
                    status={game[8]} 
                  />)) 
                  //Data: [ChampName, ChampLvl, kills, deaths, assists, cs, timePlayed, lane, winBoolean]
                  */}
                  <HStack>
                    <VStack>
                    {matchData.splice(0, Math.ceil(matchData.length / 2)).map(game => (
                      <MatchCard 
                        champion={game[0]}
                        lvl={game[1]}
                        kills={game[2]}
                        deaths={game[3]}
                        assists={game[4]}
                        cs={game[5]}
                        time={game[6]}
                        lane={game[7]}
                        status={game[8]} />
                      ))}
                      </VStack>
                      <VStack>
                      {matchData.map(game => (
                      <MatchCard 
                        champion={game[0]}
                        lvl={game[1]}
                        kills={game[2]}
                        deaths={game[3]}
                        assists={game[4]}
                        cs={game[5]}
                        time={game[6]}
                        lane={game[7]}
                        status={game[8]} />
                      ))}
                      </VStack>
                    </HStack>
                    </Box>
                  </Flex>
              </HStack>
              </Stack>
        </Box>
        </Stack>
        </HStack>
      </Main>
    </Container>
  );
};

export default SummonerDetails;
