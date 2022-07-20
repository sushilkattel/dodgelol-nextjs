import { Text, Image, HStack, VStack, Flex, Divider, Stack, Link, Box } from "@chakra-ui/react";
import { Hero } from "../../components/Hero";
import { Container } from "../../components/Container";
import { Main } from "../../components/Main";
import { Footer } from "../../components/Footer";
import { Search } from "../../components/Search";
import { ArrowBtn } from "../../components/ArrowBtn";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { LeaderboardCard } from "../../components/LeaderboardCard";
import { getValorantLeaderboard } from "../../apiUtils";

const Index = () => {
    const [leaderboard, setLeaderboard] = useState([]);
    const data = [
        {name: 'apcloutgod', score: 69},
        {name: 'apcloutgod', score: 69},
        {name: 'apcloutgod', score: 69},
        {name: 'apcloutgod', score: 69},
        {name: 'apcloutgod', score: 69},
        {name: 'apcloutgod', score: 69},
        {name: 'apcloutgod', score: 69},
        {name: 'apcloutgod', score: 69},
        {name: 'apcloutgod', score: 69},
        {name: 'apcloutgod', score: 69},
    ]
    useEffect(() => {
      const fetchLeaderboard = async () => {
        const resp = await getValorantLeaderboard();
        if(resp) {
          setLeaderboard(resp.players);
        }
      }
      fetchLeaderboard()
      
    }, [])
    console.log("RESP:", JSON.stringify(leaderboard))
    

  return (
    <Container height="100%">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      </style>
      <Main>
        <HStack>
        <Image
          src="/logo.png"
          alt="logo"
          width={"5vw"}
          marginTop={'8vh'}
          marginLeft={'1vw'}
          draggable={'false'}
        />
        </HStack>
        <HStack>
          <Image
            src="/yasuo.png"
            alt="logo"
            width={"30vw"}
            marginTop={'8vh'}
            marginLeft={'1vw'}
            draggable={'false'}
            opacity={'40%'}
          />
          <Flex pl={'8vw'}>
          <VStack>
              <Box
              marginLeft={10}
              maxW={"50vw"}
              w={"50vw"}
              maxH={"80vh"}
              h={"78vh"}
              bg={'white'}
              boxShadow={"2xl"}
              rounded={'2xl'}
              overflow={"hidden"}
              overflowY={'auto'}
              >
                <Stack alignItems={'center'}>
                  <Text fontFamily={'Bebas Neue'} fontSize={40} mt={'2vh'} color={'#15172A'}>Leaderboards</Text>
                {leaderboard.map(user => (<LeaderboardCard name={user.gameName} tagLine={user.tagLine} points={user.rankedRating} place={user.leaderboardRank} />))}
                </Stack>

              </Box>
          </VStack>
          </Flex>
        </HStack>
      </Main>
      <Footer>
        <Text>© 2022 DodgeLoL</Text>
      </Footer>
    </Container>
  );
};

const divStyle = {
  paddingTop: "2vh",
};

export default Index;
