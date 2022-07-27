import { Flex, FlexProps, Stack, StackProps } from "@chakra-ui/react";

export const Container = (props: StackProps) => (
  <Stack
    //bgColor="#15172A"
    color="black"
    _dark={{
      bg: "gray.900",
      color: "white",
    }}
    transition="all 0.15s ease-out"
    {...props}
  />
);
