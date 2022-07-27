import { Flex, Heading } from "@chakra-ui/react";

export const Hero = ({ title }: { title: string }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    height="16vh"
    bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
    bgClip="text"
  >
    <Heading fontSize={["15vw","7vw"]}>{title}</Heading>
  </Flex>
);

Hero.defaultProps = {
  title: "DodgeLoL",
};
