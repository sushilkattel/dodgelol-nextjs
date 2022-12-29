import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, ButtonProps } from "@chakra-ui/react";

export const ValSearchBtn = (props: ButtonProps) => (
  <Button
    backgroundColor={"#F66F7E"}
    color={"white"}
    //size={"lg"}
    width={["16vw", "7.8vw"]}
    fontFamily={"Bebas Neue"}
    fontWeight={"light"}
    height={["6vh", "7.8vh"]}
    _hover = {{bg: '#c95965'}}
    fontSize={["sm","sm", "md","2xl"]}
    rounded={'none'}
    _outline={'1px dotted black'}
    {...props}
  >
    Search
  </Button>
);
