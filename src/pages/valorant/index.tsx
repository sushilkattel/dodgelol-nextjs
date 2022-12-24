import { Container } from "../../components/Container";
import { Main } from "../../components/Main";
import { HStack, Image, Stack, VStack, Flex, Text, Box, useColorModeValue, Center} from "@chakra-ui/react";
import { ValSearch } from "../../components/ValSearch";

const Index = () => {
  return (
    <Container height="100vh" width={"100vw"}>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      </style>
      <Main h={'full'} w={'100vw'} mt={0}>
        <Stack direction={'column'}>
        <Stack direction={["column", "row"]} w={'100vw'} h={'50%'} bg={'white'} mb={'-1%'}>
          <video autoPlay loop muted id='video'>
            <source src='/valVid.mp4' type='video/mp4'/>
            </video>
            <Stack position={'absolute'} w={'100%'} h={'full'}>
              <Image 
                src="/valLogo.png"
                alt="logo"
                width={["12", "8"]}
                marginTop={"1.5vh"}
                marginLeft={"0.5vw"}
                draggable={"false"}/>
                <Stack border={'white'} borderWidth={'medium'} width={'80%'} height={'max-content'}>
                  <Text fontFamily={'Bebas Neue'} pl='30%' pt={'10%'} fontSize={80}>DISCOVER YOUR TRUE SELF</Text>
                </Stack>
            </Stack>
          </Stack>
          <Stack width={'100%'} height='40%' bgColor={'#FAF3DD'}>
            <Text id="headingSmall">FIND YOUR CALLING</Text>
            <Center>
            <ValSearch />
            </Center>
          </Stack>
          <Text color={'white'}>Footer</Text>
        </Stack>
      </Main>
    </Container>
  );
};

const divStyle = {
  paddingTop: "2vh",
};

export default Index;
