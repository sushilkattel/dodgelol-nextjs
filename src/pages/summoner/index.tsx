import { Text, Image, HStack, Center, Stack } from "@chakra-ui/react";
import { Container } from "../../components/Container";
import Link from "next/link";
import { Search } from "../../components/Search";
import { Footer } from "../../components/Footer";
import { useState } from "react";
import { ArrowBtn } from "../../components/ArrowBtn";

const index = () => {
  const [summonerName, setSummonerName] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      window.location.href = `/summoner/${summonerName}`;
  };
return (
  <Container height="100vh">
      <Image
          src="/logo.png"
          alt="logo"
          width={["10vw", "5vw"]}
          marginTop={"2vh"}
          marginLeft={["3vw", "1vw"]}
          draggable={"false"}
        />
      <style>
      @import
      url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
    </style>
    <Center>
      <Stack mt={"30vh"}>
        <Stack direction={['column', 'row']}>
          <Text color={"white"} textAlign={'center'}>
            How tf did u end up here lmao go back to{" "}
          </Text>
          <Link href="/">
            <a>
              <Text
                color={"cyan"}
                textDecoration={"underline"}
                textAlign={'center'}
              >
                HOME
              </Text>
            </a>
          </Link>
          <Text color={"White"} textAlign={'center'}>or search again</Text>
        </Stack>
        <HStack pt={'2vh'} alignSelf={'center'}>
          <form onSubmit={handleSubmit}>
          <Search onChange={(e) => setSummonerName(e.target.value)}/>
          <ArrowBtn type="submit"/>
          </form>
        </HStack>
      </Stack>
    </Center>
    <Footer />
  </Container>
);
};

export default index;
