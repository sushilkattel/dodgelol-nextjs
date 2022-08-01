import { Text, Image, HStack, VStack, Flex, Divider, Stack, Link } from "@chakra-ui/react";
import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import { Search } from "../components/Search";
import { ArrowBtn } from "../components/ArrowBtn";
import { useState } from "react";
import { useRouter } from "next/router";

const Index = () => {
  const [summonerName, setSummonerName] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = `/summoner/${summonerName}`;
  };

  return (
    <Container height="100vh" width={"100vw"}>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      </style>
      <Main>
        <HStack>
        <Image
          src="/logo.png"
          alt="logo"
          width={["10vw","5vw"]}
          marginTop={'8vh'}
          marginLeft={["3vw",'1vw']}
          draggable={'false'}
        />
        <Flex alignSelf={'flex-end'} width={'100%'} align={'end'}>
          {/*<Link fontFamily={'Bebas Neue'} fontSize={32} color={'white'} textAlign={'center'}>Valorant</Link>*/}
        </Flex>
        </HStack>
        <Stack width={"100vw"} direction={['column','row']} alignItems={'center'}>
          <Image
            src="/yasuo.png"
            alt="logo"
            width={["50vw","30vw"]}
            marginTop={'8vh'}
            marginLeft={'1vw'}
            draggable={'false'}
            opacity={'40%'}
          />
          <Flex pl={['4vw','8vw']}>
          <VStack marginBlock={-10}>
              <HStack>
                <Hero />
                <Image 
                  src="/poro.png"
                  width={["12vw","6vw"]}
                />
              </HStack>
              <form onSubmit={handleSubmit}>
                <Flex marginBlock={[-10, 0]}>
                  <HStack style={divStyle}>
                    <Search onChange={(e) => setSummonerName(e.target.value)} />
                    <ArrowBtn type="submit" />
                  </HStack>
                </Flex>
              </form>
              <Divider
                paddingTop={[5, 0]}
                width={['0', '100%']}
                height={['0vh','2vh']}
              />
          </VStack>
          </Flex>
        </Stack>
        <footer>
          <Text fontFamily={'Bebas Neue'} fontSize={24} color={'white'} ml={'2vw'} mt={['60%', '']}>
            © 2022 DodgeLoL
          </Text>
          <Text fontFamily={'Bebas Neue'} fontSize={[10,16]} color={'white'} ml={'2vw'} width={['90%','50%']}>
          DodgeLoL isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.‍
          </Text>
          </footer>
      </Main>
    </Container>
  );
};

const divStyle = {
  paddingTop: "4vh",
};

export default Index;
