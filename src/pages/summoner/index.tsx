import { Text, Image, HStack, Center, Stack } from "@chakra-ui/react";
import { Container } from "../../components/Container";
import Link from "next/link";
import { Search } from "../../components/Search";

const index = () => {
  return (
    <Container height="100vh">
      <Center>
        <Stack mt={"40vh"}>
          <HStack>
            <Text color={"white"} textAlign={"center"}>
              Hello how tf did u end up here lmao go back to{" "}
            </Text>
            <Link href="/">
              <a>
                <Text
                  color={"cyan"}
                  textDecoration={"underline"}
                  textAlign={"center"}
                >
                  HOME
                </Text>
              </a>
            </Link>
            <Text color={"White"}>or search again</Text>
          </HStack>
          <Search />
        </Stack>
      </Center>
    </Container>
  );
};

export default index;
