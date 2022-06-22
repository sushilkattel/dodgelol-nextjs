import { Flex, Heading } from "@chakra-ui/react";

export const Hero = ({ title }: { title: string }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    height="16vh"
    paddingTop={"2vh"}
    paddingBottom={"4vh"}
    bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
    bgClip="text"
  >
    <Heading fontSize="7vw">{title}</Heading>
  </Flex>
);

Hero.defaultProps = {
  title: "DodgeLoL",
};
