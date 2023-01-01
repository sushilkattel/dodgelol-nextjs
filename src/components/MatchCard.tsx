import {
  Avatar,
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  useColorModeValue,
  Image,
  Stack,
  VStack,
  Center,
  Divider,
} from "@chakra-ui/react";
import moment from "moment";

interface MatchDetails {
  champion: string;
  kills: any;
  deaths: any;
  assists: any;
  cs: any;
  time: any;
  status: boolean;
  lvl: any;
  lane: string;
  gameEnd: any;
  gameMode: string;
}

export const MatchCard = (props: MatchDetails) => {
  const timeago = moment(props.gameEnd).fromNow();
  var color = "black";
  var bgColor = "#98C1D9";
  var wl = "W";
  var wlColor = "#355070";
  var divColor = "#81ACC5";
  var gameMode = props.gameMode;
  if (props.status == false) {
    bgColor = "#FFB2B2";
    wl = "L";
    wlColor = "#F64545";
    divColor = "#EB9C9C";
  }

  const getKDA = () => {
    const kill = parseInt(props.kills);
    const death = parseInt(props.deaths);
    const assist = parseInt(props.assists);
    if (death == 0) {
      return kill + assist;
    }
    const sum = kill + assist;
    return parseFloat((sum / death).toFixed(2));
  };
  const getCs = () => {
    const time = Math.floor(props.time / 60);
    const cs = parseInt(props.cs);
    return (cs / time).toFixed(1);
  };

  const getCsScore = () => {
    const cs = getCs();
    var score = 0;
    if (parseFloat(cs) >= 5.0) {
      if (parseFloat(cs) >= 6.0) {
        if (parseFloat(cs) >= 7.0) {
          score += 20;
        }
        score += 10;
      }
      score += 5;
    }
    return score;
  };
  const getKdaScore = () => {
    const kda = getKDA();
    var score = 0;
    if (kda >= 1.5) {
      if (kda >= 3.0) {
        if (kda >= 4.0) {
          score += 20;
        }
        score += 15;
      }
      score += 5;
    }
    return score;
  };
  const getTimePlayed = () => {
    const gameTime = props.time;
    var minutes = Math.floor(gameTime / 60);
    var seconds = gameTime - minutes * 60;
    return minutes + "m " + seconds + "s";
  };

  const getRating = () => {
    const csScore = getCsScore();
    const kdaScore = getKdaScore();
    var score = csScore + kdaScore;
    if (score >= 20) {
      color = "green";
      return "Excellent";
    } else if (score >= 10) {
      color = "orange";
      return "Decent";
    } else if (score >= 5) {
      color = "brown";
      return "Meh";
    }
    color = "red";
    return "Dog";
  };
  var champion = props.champion;
  if (champion == "FiddleSticks") {
    champion = "Fiddlesticks";
  }
  const rating = getRating();
  return (
    <Box w="full">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      </style>
      <link rel="stylesheet" href="https://use.typekit.net/ial4jci.css"></link>
      <VStack w="full" bg={bgColor} rounded={"md"} overflow={"hidden"} p={4} h="full">
        <HStack justifyContent="space-between" w="full">
          <Text fontFamily={"Bebas Neue"} color={"#355070"}>
            {gameMode}
          </Text>
          <Text fontFamily={"source-sans-pro"} color={"#7E7E7E"}>
            {timeago}
          </Text>
        </HStack>
        <Stack
          textAlign="center"
          direction={{ base: "column", md: "row" }}
          w="full"
          justifyContent="space-between"
        >
          <Stack
            direction={{ base: "column", md: "row" }}
            alignItems={{ base: "center", md: "flex-start" }}
            justifyContent="space-between"
            w={{ base: "full", md: "80%" }}
          >
            <Stack
              direction={{ base: "column", md: "row" }}
              alignItems={{ base: "center", md: "flex-start" }}
            >
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/12.13.1/img/champion/${champion}.png`}
                w={{ base: "100px", md: "70px" }}
                rounded="md"
                h={{ base: "100px", md: "70px" }}
              />
              <VStack alignItems={{ base: "center", md: "flex-start" }} spacing={0}>
                <Text fontFamily={"Bebas Neue"} color={"#355070"}>
                  {props.champion}
                </Text>
                <Stack alignSelf={["center", "center", "flex-start"]}>
                  <Text fontFamily={"source-sans-pro"} color={"#7E7E7E"}>
                    Lvl {props.lvl}
                  </Text>
                </Stack>
                <Text fontFamily={"source-sans-pro"} color={"#7E7E7E"}>
                  {getTimePlayed()}
                </Text>
              </VStack>
            </Stack>
            <VStack alignItems="center" spacing={0}>
              <Text fontFamily={"Bebas Neue"} color={"#F64545"}>
                {props.kills}/{props.deaths}/{props.assists}
              </Text>
              <Text fontFamily={"source-sans-pro"} color={"#7E7E7E"}>
                {getKDA()} KDA
              </Text>
              <Stack>
                <Text fontFamily={"Bebas Neue"} color={"#355070"}>
                  {getRating()}
                </Text>
              </Stack>
            </VStack>
            <VStack spacing={0}>
              <Text fontFamily={"Bebas Neue"} color={"#355070"}>
                {props.cs} CS
              </Text>
              <Text fontFamily={"source-sans-pro"} color={"#7E7E7E"}>
                ({getCs()})
              </Text>
            </VStack>
          </Stack>
          <Text
            justifySelf="baseline"
            fontFamily={"Bebas Neue"}
            color={wlColor}
            fontSize="xxx-large"
          >
            {wl}
          </Text>
        </Stack>
      </VStack>
    </Box>
  );
};
MatchCard.defaultProps = {
  champion: "NA",
  kills: 0,
  deaths: 0,
  assists: 0,
  cs: 0,
  time: 0,
  status: true,
};
