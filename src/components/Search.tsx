import { Input, InputProps } from "@chakra-ui/react";

export const Search = (props: InputProps) => (
  <Input
    placeholder="Summoner Name..."
    variant='filled'
    //size={'lg'}
    width={"40vw"}
    //width={{base: '30vw', md: '40vw', sm: '50vw', xs: '60vw'}}
    height={"8vh"}
    //fontSize={"1.4vw"}
    fontSize={{base: "1.4vw", sm: "5vw", md: "1.6vw"}}
    rounded="xl"
    color="teal"
    _placeholder={{ color: "#15172A" }}
    required
    {...props}
  />
);
