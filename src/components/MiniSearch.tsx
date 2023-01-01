import { HStack, Input, InputProps, Image, Flex } from "@chakra-ui/react";
import { MiniBtn } from "./MiniBtn";

export const MiniSearch = (props: InputProps) => (
  <HStack h="50px">
    <Input
      placeholder="Summoner Name..."
      variant="filled"
      //size={'lg'}
      //width={{base: '30vw', md: '40vw', sm: '50vw', xs: '60vw'}}
      height="full"
      //fontSize={"1.4vw"}
      fontSize="lg"
      rounded="md"
      color="teal"
      _placeholder={{ color: "white" }}
      required
      {...props}
    />
    <MiniBtn />
  </HStack>
);
