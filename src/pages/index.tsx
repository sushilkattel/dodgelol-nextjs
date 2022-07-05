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
        <Flex alignSelf={'flex-end'} width={'100%'} align={'end'}>
          <Link fontFamily={'Bebas Neue'} fontSize={32} color={'white'} textAlign={'center'}>Valorant</Link>
        </Flex>
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
              <HStack>
                <Hero />
                <Image 
                  src="/poro.png"
                  width="6vw"
                />
              </HStack>
              <form onSubmit={handleSubmit}>
                <Flex pt={'2vh'}>
                  <HStack style={divStyle}>
                    <Search onChange={(e) => setSummonerName(e.target.value)} />
                    <ArrowBtn type="submit" />
                  </HStack>
                </Flex>
              </form>
              <Divider
                height={'2vh'}
              />
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
