import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, ButtonProps } from "@chakra-ui/react";

export const ArrowBtn = (props: ButtonProps) => (
  <Button
    backgroundColor={"#6CF6FB"}
    color={"#15172A"}
    marginLeft={"1vw"}
    borderRadius={10}
    //size={"lg"}
    width={["16vw","6vw"]}
    height={["6vh","8vh"]}
    fontSize={"2xl"}
    {...props}
  >
    .GG
  </Button>
);
