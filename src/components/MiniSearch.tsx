import { HStack, Input, InputProps, Image, Flex } from "@chakra-ui/react";
import { MiniBtn } from "./MiniBtn";

export const MiniSearch = (props: InputProps) => (
  <Flex ml={"60vw"} mt={[0, "1em"]}>
    <HStack>
      <Input
        placeholder="Summoner Name..."
        variant="filled"
        //size={'lg'}
        width={["0vw", "21vw"]}
        //width={{base: '30vw', md: '40vw', sm: '50vw', xs: '60vw'}}
        height={["0vh", "6vh"]}
        //fontSize={"1.4vw"}
        fontSize={["sm", "lg"]}
        rounded="xl"
        color="teal"
        _placeholder={{ color: "#15172A" }}
        required
        {...props}
      />
      <MiniBtn />
    </HStack>
  </Flex>
);
