import {
  Box,
  Flex,
  HStack,
  Image,
  Heading,
  Text,
  useBreakpointValue
} from "@chakra-ui/react";
import React, { useEffect, useState } from 'react';

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

export const LeaderboardCard: React.FC<LeaderboardProps> = ({ data }) => {
  const fontSize = useBreakpointValue({ base: 'md', lg: 'lg' });
  const marginTop = useBreakpointValue({ base: 4, lg: 8 });
  const competitiveRanks = { 27: ["Radiant"], 26: "Immortal III"}
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
    data.then((res) => setLeaderboardData(res));
  }, [data]);

  if (!leaderboardData) {
    return <Box>Loading...</Box>;
  }
return (
  <Flex p={"1vh"}>
    <style>
      @import
      url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
    </style>
    <Box>
      <Heading as="h2" size="xl" mb={marginTop}>
        Leaderboard
      </Heading>
      {leaderboardData.players.map((player) => (
        <Flex
        key={player.puuid}
        borderWidth="1px"
        rounded="lg"
        p={4}
        mb={marginTop}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Text fontSize={fontSize} fontWeight="bold">
            {player.leaderboardRank}. {player.gameName}#{player.tagLine}
          </Text>
          <Text fontSize={fontSize} fontWeight="bold">
            {competitiveRanks[(player.competitiveTier)]}
          </Text>
        </Box>
        <Box>
          <Text fontSize={fontSize}>
            Rank Rating: {player.rankedRating} RR
          </Text>
          <Text fontSize={fontSize} mt={2}>
            Number of Wins: {player.numberOfWins}
          </Text>
        </Box>
      </Flex>
      ))}
    </Box>
  </Flex>
)
};
