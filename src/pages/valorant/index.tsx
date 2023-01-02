import {
  HStack,
  Image,
  Stack,
  VStack,
  Flex,
  Text,
  Button,
  Box,
  useColorModeValue,
  Center,
  IconButton,
} from "@chakra-ui/react";
import { Container } from "../../components/Container";
import { LeaderboardCard } from "../../components/valorant/LeaderboardCard";
import { Main } from "../../components/Main";
import { ValSearch } from "../../components/valorant/ValSearch";
import { ValSearchBtn } from "../../components/valorant/ValSearchBtn";
import { getValorantLeaderboard } from "../../apiUtils";

const Index = () => {
  const data = getValorantLeaderboard();
  return (
    <Container height="100vh" width="100vw">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      </style>
      <Main w="100vw" mt={0}>
        <Stack direction="column">
          <Stack direction="row" w="100vw" h="full" bg="white" mb="-1%">
            <Stack width={"100%"} height={["full", "full", "450px"]}>
              <video autoPlay loop muted id="video" width="100%" style={{ overflow: "hidden" }}>
                <source src="/valVid.mp4" type="video/mp4" />
              </video>
            </Stack>
            <Stack position="absolute" w="100%">
              <Image
                src="/valLogo.png"
                alt="logo"
                width={["6", "8"]}
                marginTop="1.5vh"
                marginLeft="0.5vw"
                draggable="false"
              />
              <Stack border="white" borderWidth="medium" width={"100%"} height="max-content">
                <Center>
                  <Box border="1px" p={5} width={"max-content"} height={"max-content"} mt="4%">
                    <Text fontFamily="Bebas Neue" fontSize={[40, 50, 60, 80, 100]}>
                      DISCOVER YOUR TRUE SELF
                    </Text>
                  </Box>
                </Center>
              </Stack>
            </Stack>
          </Stack>
          <Stack width="100%" bgColor="#FAF3DD" p={"5vh"} height={"max-content"} pb={"10vh"}>
            <Text id="headingSmall" fontSize={[30, 50]} pl="0.5vw" pt={"0.5vh"}>
              FIND YOUR CALLING
            </Text>
            <Center>
              <Stack direction={"row"} ml={"6vw"}>
                <ValSearch mt={1} />
                <Box border="1px" borderColor="black" p={1} w={"max-content"}>
                  <ValSearchBtn />
                </Box>
              </Stack>
            </Center>
            <Center>
              <VStack>
                <Text color={"black"} fontFamily={"Bebas Neue"} fontSize={[16, 24]}>
                  ━━━━ OR ━━━━
                </Text>
                <Button
                  leftIcon={<Image src="/riotlogo.png" />}
                  backgroundColor={"#FF4655"}
                  _hover={{ bg: "#db3d4b" }}
                  width={"max-content"}
                  fontSize={["xs", "xs", "md", "l"]}
                >
                  {" "}
                  Sign In With Riot
                </Button>
              </VStack>
            </Center>
          </Stack>
          <Center>
            <Stack w={"full"}>
              <Center>
                <LeaderboardCard data={data} />
              </Center>
            </Stack>
          </Center>
        </Stack>
      </Main>
    </Container>
  );
};

export default Index;
