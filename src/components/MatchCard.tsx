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
    <Flex p={["1vh", "1vh"]}>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      </style>
      <link rel="stylesheet" href="https://use.typekit.net/ial4jci.css"></link>
      <Box
        maxW={["50vw", "25vw"]}
        w={["50vw", "24.306vw"]}
        maxH={["max-content", "max-content","25vh"]}
        h={["max-content", "max-content","13vh"]}
        bg={bgColor}
        rounded={"3xl"}
        overflow={"hidden"}
      >
        <Stack width={"100%"}>
          <Text
            fontFamily={"Bebas Neue"}
            alignSelf={["center", "center"]}
            mt={["0", "0.5vh"]}
            color={"#355070"}
            mb={"-2vh"}
            fontSize={"1.25vw"}
          >
            {gameMode}
          </Text>
          <Text
            fontFamily={"source-sans-pro"}
            alignSelf={["center", "center"]}
            color={"#7E7E7E"}
            mb={"-2vh"}
            fontSize={[12, 8, 10, 12]}
          >
            {timeago}
          </Text>
        </Stack>
        <Stack direction={["column", "column", "row"]} mt={[0, "-0.6em"]}>
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/12.13.1/img/champion/${champion}.png`}
            style={{ borderRadius: 25 }}
            alignSelf={["center","center", "flex-start"]}
            width={["15vw", "3.472vw"]}
            mt={"0vh"}
            ml={"0.5vw"}
          />
          <VStack
            maxW={["initial", "4.514vw"]}
            w={["initial", "4.514vw"]}
            pt={"0.3em"}
          >
            <Text
              fontFamily={"Bebas Neue"}
              alignSelf={["center", "center", "flex-start"]}
              mb={"-20%"}
              fontSize={[20, 15, 20]}
              color={"#355070"}
            >
              {props.champion}
            </Text>
            <Stack alignSelf={["center", "center", "flex-start"]}>
              <Text
                fontFamily={"source-sans-pro"}
                alignSelf={["center", "center", "flex-start"]}
                mb={"-40%"}
                fontSize={[14, 10, 14]}
                color={"#7E7E7E"}
              >
                Lvl {props.lvl}
              </Text>
            </Stack>
            <Text
              fontFamily={"source-sans-pro"}
              alignSelf={["center", "center", "flex-start"]}
              fontSize={[10, 9, 10]}
              color={"#7E7E7E"}
            >
              {getTimePlayed()}
            </Text>
          </VStack>
          <VStack width={["initial", "4.67vw"]}>
            <Text
              fontFamily={"Bebas Neue"}
              alignSelf={["center", "center"]}
              mt={["0", "0.6vh"]}
              mb={"-2vh"}
              fontSize={[20, 17, 20]}
              color={"#F64545"}
            >
              {props.kills}/{props.deaths}/{props.assists}
            </Text>
            <Text
              fontFamily={"source-sans-pro"}
              alignSelf={["center", "center"]}
              mt={"-2vh"}
              fontSize={[14, 12, 14]}
              color={"#7E7E7E"}
            >
              {getKDA()} KDA
            </Text>
            <Stack>
              <Text
                fontFamily={"Bebas Neue"}
                alignSelf={["center", "center"]}
                mt={"-1.4vh"}
                color={"#355070"}
                fontSize={[14, 12, 14]}
              >
                {getRating()}
              </Text>
            </Stack>
          </VStack>
          <VStack width={["initial", "5.5vw"]}>
            <Text
              fontFamily={"Bebas Neue"}
              alignSelf={["center", "center"]}
              mt={["0", "1vh"]}
              mb={"-2vh"}
              fontSize={[20,15, 20]}
              color={"#355070"}
            >
              {props.cs} CS
            </Text>
            <Text
              fontFamily={"source-sans-pro"}
              alignSelf={["center", "center"]}
              mt={"-2vh"}
              color={"#7E7E7E"}
              fontSize={[14,12, 14]}
            >
              ({getCs()})
            </Text>
          </VStack>
          <Stack
            height={["10vh", "20vh"]}
            align={["center", "flex-start"]}
            direction={["column", "column","row"]}
          >
            <Divider
              orientation={"vertical"}
              ml={"-1em"}
              mt={"-30"}
              borderColor={divColor}
              opacity={[0, "initial"]}
            />
            <Center>
              <Text
                align={"center"}
                fontFamily={"Bebas Neue"}
                fontSize={[40, 25, 40]}
                color={wlColor}
                ml={[0, "0.2em"]}
              >
                {wl}
              </Text>
            </Center>
          </Stack>
        </Stack>
      </Box>
    </Flex>
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
