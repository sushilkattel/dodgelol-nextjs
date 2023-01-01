import {
  Text,
  Image,
  HStack,
  VStack,
  Flex,
  Divider,
  Stack,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import { Search } from "../components/Search";
import { ArrowBtn } from "../components/ArrowBtn";
import { useState } from "react";
import { useRouter } from "next/router";
import { MiniLogo } from "../components/MiniLogo";

const Index = () => {
  const [summonerName, setSummonerName] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = `/summoner/${summonerName}`;
  };

  // Use the useBreakpointValue hook to get the value of a style
  // based on the current breakpoint
  const marginTop = useBreakpointValue({ base: "8vh", sm: "10vh", md: "12vh", lg: "16vh" });
  const width = useBreakpointValue({ base: "10vw", sm: "8vw", md: "7.5vw", lg: "5vw" });
  const imageWidth = useBreakpointValue({ base: "50vw", sm: "45vw", md: "40vw", lg: "30vw" });
  const imageMarginTop = useBreakpointValue({ base: "8vh", sm: "10vh", md: "12vh", lg: "16vh" });
  const imageMarginLeft = useBreakpointValue({ base: "1vw", sm: "1.5vw", md: "1.5vw", lg: "2vw" });
  const paddingTop = useBreakpointValue({ base: 5, sm: 4, md: 3, lg: 0 });
  const divWidth = useBreakpointValue({ base: "0", sm: "100%", md: "100%", lg: "100%" });
  const divHeight = useBreakpointValue({ base: "0vh", sm: "1vh", md: "1vh", lg: "2vh" });

  return (
    <Container height="auto" width={"100vw"} mt={["0vh", "-5vh", "-10vh"]}>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      </style>
      <Main>
        <HStack>
          <MiniLogo width={width} marginTop={marginTop} />
          <Flex alignSelf={"flex-end"} width={"100%"} align={"end"}>
            {/*<Link fontFamily={'Bebas Neue'} fontSize={fontSize} color={'white'} textAlign={'center'}>Valorant</Link>*/}
          </Flex>
        </HStack>
        <Stack width={"100vw"} direction={["column", "row"]} alignItems={"center"}>
          <Image
            src="/yasuo.png"
            alt="logo"
            width={imageWidth}
            marginTop={imageMarginTop}
            marginLeft={imageMarginLeft}
            draggable={"false"}
            opacity={"40%"}
          />
          <Flex pl={["4vw", "8vw"]}>
            <VStack marginBlock={-10}>
              <HStack>
                <Hero />
                <Image src="/poro.png" width={["12vw", "6vw"]} />
              </HStack>
              <form onSubmit={handleSubmit}>
                <Flex marginBlock={[-10, 0]}>
                  <HStack style={divStyle}>
                    <Search onChange={e => setSummonerName(e.target.value)} />
                    <ArrowBtn type="submit" />
                  </HStack>
                </Flex>
              </form>
              <Divider paddingTop={paddingTop} width={divWidth} height={divHeight} />
            </VStack>
          </Flex>
        </Stack>
        <Stack pt={["60%", 0]} w={["full", "35%"]}>
        <Footer />
        </Stack>
      </Main>
    </Container>
  );
};

const divStyle = {
  paddingTop: "4vh",
};

export default Index;
