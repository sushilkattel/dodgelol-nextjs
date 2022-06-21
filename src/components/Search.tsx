import { Input, InputProps } from "@chakra-ui/react";

export const Search = (props: InputProps) => (
  <Input
    placeholder="Summoner Name..."
    //size={'lg'}
    //width={"30vw"}
    width={{base: '30vw', md: '40vw', sm: '50vw', xs: '60vw'}}
    height={"5vh"}
    //fontSize={"1.4vw"}
    fontSize={{base: "1.4vw", sm: "5vw", md: "1.6vw"}}
    rounded="lg"
    color="teal"
    _placeholder={{ color: "white" }}
    required
    {...props}
  />
);
