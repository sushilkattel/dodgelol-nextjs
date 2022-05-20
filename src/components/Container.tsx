import { Flex, FlexProps } from "@chakra-ui/react";

export const Container = (props: FlexProps) => (
  <Flex
    direction="column"
    alignItems="center"
    justifyContent="center"
    bgGradient="linear(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)"
    color="black"
    _dark={{
      bg: "gray.900",
      color: "white",
    }}
    transition="all 0.15s ease-out"
    {...props}
  />
);
