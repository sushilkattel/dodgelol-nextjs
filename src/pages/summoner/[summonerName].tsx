import {
  Text,
  Image,
  HStack,
  Box,
  useColorModeValue,
  Stack,
  Divider,
  Flex,
  VStack,
} from "@chakra-ui/react";
import { Container } from "../../components/Container";
import { Main } from "../../components/Main";
import { SummonerCard } from "../../components/SummonerCard";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  getSummonerData,
  getSummonerMatchList,
  getSummonerRanked,
} from "../../apiUtils";
import { StatCs } from "../../components/StatCs";
import {
  previewGameData,
  rolesMatchData,
  summonerMatch,
} from "../../apiUtils/summonerMatch";
import axios from "axios";
import { MatchCard } from "../../components/MatchCard";
import { match } from "assert";
import { StatRoles } from "../../components/StatRoles";
import { Search } from "../../components/Search";
import { MiniSearch } from "../../components/MiniSearch";
import { ArrowBtn } from "../../components/ArrowBtn";

const SummonerDetails = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(undefined);
  const [ranked, setRanked] = useState([]);
  const [matchData, setMatchData] = useState([]);
  const [roleData, setRoleData] = useState({});
  const router = useRouter();
  const icon = data?.profileIconId?.toString();
  const name = data?.name?.toString();
  const lvl = data?.summonerLevel?.toString();
  const bgColor = useColorModeValue("white", "gray.800");
  //button stuff
  const [summonerNameSearch, setSummonerNameSearch] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = `/summoner/${summonerNameSearch}`;
  };

  useEffect(() => {
    const summonerName = router.query?.summonerName?.toString() || "";
    const fetchData = async () => {
      const resp = await getSummonerData(summonerName);
      if (resp) {
        setData(resp);
        await fetchRank(resp.id);
        console.log("RESPONSE: ", resp);
        await fetchMatchList(resp.puuid);
        console.log("MATCH DATA: ", matchData);
        return true;
      }
    };
    const fetchRank = async (id?: string) => {
      const resp = await getSummonerRanked(id);
      if (resp) {
        setRanked(resp);
        return true;
      }
    };
    const fetchMatchList = async (puuid?: string) => {
      const resp = await getSummonerMatchList(puuid);
      if (resp) {
        console.log("MATCHLIST: ", resp);
        await updateGameData(resp, puuid);
        return true;
      }
    };
    const updateGameData = async (data?: any, puuid?: string) => {
      const summData = await summonerMatch(data, puuid);
      const summPreview = await previewGameData(summData, puuid);
      const roles = await rolesMatchData(summData, puuid);
      setMatchData(summPreview);
      setRoleData(roles);
      setLoading(false);
      console.log("testData: ", matchData);
      //await summonerMatch(data, puuid).then((value) => console.log("TEST VALUE PLS WORK: ", value))
    };

    if (summonerName) {
      fetchData();
    }
  }, [router]);

  if (isLoading) {
    return (
      <Container height="100vh">
        <Text>Loading.</Text>
      </Container>
    );
  }
  {
    if (ranked[0]?.queueType == "RANKED_TFT_DOUBLE_UP") {
      ranked[0] = null;
    }
  }

  return (
    <Container height="100vh">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      </style>
      <Main alignSelf={"baseline"} marginLeft={"2em"} pt={["1em", "3em"]}>
        <HStack>
          <Image
            src="/logo.png"
            alt="logo"
            width={["0vw", "4vw"]}
            marginLeft={["3vw", "1vw"]}
            draggable={"false"}
          />
          <form onSubmit={handleSubmit}>
            <MiniSearch
              onKeyPress={(e) => {
                e.key === "Enter" && e.preventDefault();
              }}
              onBlur={(e) => setSummonerNameSearch(e.target.value)}
            />
          </form>
        </HStack>
        <Stack direction={["column", "row"]}>
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
            w={"70vw"}
            maxH={"100%"}
            h={"100%"}
            pt={["0.5 em", "1em"]}
          >
            <Box
              marginLeft={[0, 10]}
              maxW={["80vw", "65vw"]}
              w={["80vw", "70vw"]}
              maxH={"80vh"}
              h={"78vh"}
              bg={bgColor}
              boxShadow={"2xl"}
              rounded={"lg"}
              overflow={"hidden"}
              overflowY={["auto", "hidden"]}
            >
              <HStack w={"80vw"} h={"60%"} ml={10} overflowY={"auto"}>
                <Stack maxW={"80%"} w={"100%"} maxH={"80%"} h={"100%"}>
                  <StatCs sLp={ranked[0]?.leaguePoints.toString()} />
                </Stack>
                <Stack maxW={"50%"} w={"100%"} maxH={"80%"} ml={10} h={"100%"}>
                  <StatRoles roles={roleData} />
                </Stack>
              </HStack>

              <Divider alignSelf={"center"} mt={"-10"} />
              <Stack w={"auto"} height={"auto"}>
                <Stack
                  direction={["row", "column"]}
                  marginY={["5vh", 0]}
                  marginTop={["1vh", 0]}
                  marginX={["20%", "1vw"]}
                >
                  <Text
                    fontFamily={"Bebas Neue"}
                    fontSize={[36, 48]}
                    color={"#15172A"}
                  >
                    MATCH
                  </Text>
                  <Text
                    fontFamily={"Bebas Neue"}
                    fontSize={[36, 48]}
                    color={"#15172A"}
                  >
                    History
                  </Text>
                </Stack>
                <HStack>
                  <Flex ml={["14%", "15%"]} mt={"-15%"}>
                    <Box
                      maxW={"max-content"}
                      w={"max-content"}
                      maxH={"max-content"}
                      h={["max-content", "35vh"]}
                      bg={"white"}
                      rounded={"3xl"}
                      overflow={"hidden"}
                      overflowY={"auto"}
                      alignSelf={"center"}
                      alignContent={"center"}
                      alignItems={"center"}
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
                      <Stack direction={["column", "row"]}>
                        <VStack>
                          {matchData
                            .splice(0, Math.ceil(matchData.length / 2))
                            .map((game) => (
                              <MatchCard
                                champion={game[0]}
                                lvl={game[1]}
                                kills={game[2]}
                                deaths={game[3]}
                                assists={game[4]}
                                cs={game[5]}
                                time={game[6]}
                                lane={game[7]}
                                status={game[8]}
                              />
                            ))}
                        </VStack>
                        <VStack>
                          {matchData.map((game) => (
                            <MatchCard
                              champion={game[0]}
                              lvl={game[1]}
                              kills={game[2]}
                              deaths={game[3]}
                              assists={game[4]}
                              cs={game[5]}
                              time={game[6]}
                              lane={game[7]}
                              status={game[8]}
                            />
                          ))}
                        </VStack>
                      </Stack>
                    </Box>
                  </Flex>
                </HStack>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Main>
    </Container>
  );
};

export default SummonerDetails;
