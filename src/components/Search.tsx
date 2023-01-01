import { Input, InputProps, useBreakpointValue } from "@chakra-ui/react";

export const Search = (props: InputProps) => (
  <Input
    placeholder="Summoner Name..."
    variant="filled"
    //size={'lg'}
    width={useBreakpointValue({ base: "60vw", xs: "20vw", sm: "30vw", lg: "40vw" })}
    //width={{base: '30vw', md: '40vw', sm: '50vw', xs: '60vw'}}
    height={["6vh", "8vh"]}
    //fontSize={"1.4vw"}
    fontSize={["sm", "md", "lg", "xl"]}
    rounded="xl"
    color="teal"
    _placeholder={{ color: "#15172A" }}
    required
    {...props}
  />
);
