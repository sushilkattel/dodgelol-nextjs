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
  Center,
  Grid,
  GridItem,
} from "@chakra-ui/react";
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
import { Search } from "../../components/Search";
import { MiniSearch } from "../../components/MiniSearch";
import { ArrowBtn } from "../../components/ArrowBtn";
import { Footer } from "../../components/Footer";
import { MiniLogo } from "../../components/MiniLogo";

import "./[summonerName].module.css";

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
  const bgColor = "white";
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
      if (resp == "ERROR") {
        console.log("ERROR CAUGHT!");
        window.location.href = `/error`;
      }
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
    <Container p={8}>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      </style>
      <VStack w="full" h="full">
        <HStack w="full" justifyContent="space-between">
          <MiniLogo width={{ base: "70px", md: "90px" }} />
          <form onSubmit={handleSubmit}>
            <MiniSearch
              onKeyPress={e => {
                e.key === "Enter" && e.preventDefault();
              }}
              onBlur={e => setSummonerNameSearch(e.target.value)}
            />
          </form>
        </HStack>
        <Stack w="full" spacing={8} h="full" direction={{ base: "column", md: "row" }}>
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
          <Box
            w="full"
            h="full"
            bg={bgColor}
            boxShadow={"2xl"}
            rounded={"lg"}
            overflow={"hidden"}
            overflowY={["auto", "hidden"]}
            p={4}
          >
            <Stack
              h="full"
              direction={"row"}
              overflowY={"scroll"}
              w="full"
              alignItems={{ base: "center", lg: "flex-start" }}
            >
              <StatCs sLp={ranked[0]?.leaguePoints.toString()} />
              <StatRoles roles={roleData} />
            </Stack>

            <Divider />
            <VStack w="full" height="full" alignItems="flex-start">
              <Text fontFamily={"Bebas Neue"} fontSize={[36, 48]} color={"#15172A"}>
                MATCH HISTORY
              </Text>
              <Grid
                h="full"
                w="full"
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  xl: "repeat(2, 1fr)",
                }}
                gap={4}
              >
                {matchData.map((game, i) => (
                  <GridItem w="full" key={i}>
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
                      gameEnd={game[9]}
                      gameMode={game[10]}
                    />
                  </GridItem>
                ))}
              </Grid>
            </VStack>
          </Box>
        </Stack>
      </VStack>
      <Footer />
    </Container>
  );
};

export default SummonerDetails;
