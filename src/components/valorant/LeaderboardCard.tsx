import { Box, Flex, HStack, Image, Heading, Text, useBreakpointValue, Divider, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styles from "./LeaderboardCard.module.css";

interface LeaderboardProps {
  data: Promise<{
    actId: string;
    players: {
      puuid: string;
      gameName: string;
      tagLine: string;
      leaderboardRank: number;
      rankedRating: number;
      numberOfWins: number;
      competitiveTier: number;
    }[];
  }>;
}
function randomPic() {
  const randomNum = Math.floor(Math.random() * (13 - 1 + 1)) + 1;
  return `https://dodgelol.gg/api/images/${randomNum}.jpeg`;
}
function getPlayerName(summoner: string, tagLine: string) {
  if(!summoner) {
    return "Secret Agent"
  }
  return summoner + "#" + tagLine
}

export const LeaderboardCard: React.FC<LeaderboardProps> = ({ data }) => {
  const fontSize = useBreakpointValue({ base: "md", lg: "lg" });
  const marginTop = useBreakpointValue({ base: 4, lg: 8 });
  const competitiveRanks = { 27: ["Radiant"], 26: "Immortal III" };
  const [leaderboardData, setLeaderboardData] = useState<{
    actId: string;
    players: {
      puuid: string;
      gameName: string;
      tagLine: string;
      leaderboardRank: number;
      rankedRating: number;
      numberOfWins: number;
      competitiveTier: number;
    }[];
  } | null>(null);

  useEffect(() => {
    data.then(res => setLeaderboardData(res));
  }, [data]);

  if (!leaderboardData) {
    return <Box>Loading...</Box>;
  }
  return (
    <Box p={4} bgColor={"#2D343C"} rounded={"2xl"} overflowX={"hidden"} overflowY={"auto"} w={"95%"} h={"50vh"}>
    <Flex p={"1vh"} overflowY={"auto"}>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      </style>
      <Box w={"full"}>
        <Stack w={"full"} spacing={0}>
        <Heading as="ins" size="xl" mb={marginTop} color={"#F66F7E"} fontFamily={"Bebas Neue"}>
          Leaderboard
        </Heading>
        </Stack>
        <HStack justifyContent={"space-between"} w={"full"} spacing={10}>
          <HStack spacing={10}>
          <Text id={styles.titles} fontSize={[0,"2xl"]}>Rank</Text>
          <Text id={styles.titles} fontSize={[0,"2xl"]}>Player</Text>
          </HStack>
          <HStack spacing={20} justifyContent={"space-between"}>
          <Text id={styles.titles} fontSize={[0,"2xl"]}>RR</Text>
          <Text id={styles.titles} fontSize={[0,"2xl"]}>Tier</Text>
          <Text id={styles.titles} fontSize={[0,"2xl"]}>Wins</Text>
          </HStack>
        </HStack>
        {leaderboardData.players.map(player => (
            <HStack
            key={player.puuid}
            borderWidth="1px"
            rounded="lg"
            p={4}
            mb={marginTop}
            alignItems="center"
            justifyContent="space-between"
            w={["150vw", "full"]}
            >
            <HStack spacing={12}>
              <Text fontSize={fontSize} fontWeight="bold">
                {player.leaderboardRank}.
              </Text>
              <Text fontSize={fontSize} fontWeight="bold" >{getPlayerName(player.gameName,player.tagLine)}</Text>
            </HStack>
            <HStack spacing={10} justifyContent={"space-between"}>
              <HStack>
                <Text fontSize={fontSize} fontWeight="bold">
                  {player.rankedRating}
                </Text>
                <Text fontSize={[10,0]} fontWeight="bold">RR</Text>
              </HStack>
              <Text fontSize={fontSize} fontWeight="bold">{competitiveRanks[player.competitiveTier]}</Text>
              <HStack>
              <Text fontSize={fontSize}>
                {player.numberOfWins}
              </Text>
              <Text fontSize={[10,0]} fontWeight="bold">WINS</Text>
              </HStack>
            </HStack>
            </HStack>
        ))}
      </Box>
    </Flex>
    </Box>
  );
};
