import { Text, Image, HStack, VStack, Flex, Divider } from "@chakra-ui/react";
import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import { Search } from "../components/Search";
import { ArrowBtn } from "../components/ArrowBtn";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Index = () => {
  const [summonerName, setSummonerName] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = `/summoner/${summonerName}`;
  };

  return (
    <Container height="100%">
      <Main>
        <Image
          src="/logo.png"
          alt="logo"
          width={"5vw"}
          marginTop={'8vh'}
          marginLeft={'1vw'}
          draggable={'false'}
        />
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
