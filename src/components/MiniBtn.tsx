import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, ButtonProps } from "@chakra-ui/react";

export const MiniBtn = (props: ButtonProps) => (
  <Button
    backgroundColor={"#6CF6FB"}
    color={"#15172A"}
    marginLeft={"1vw"}
    borderRadius={10}
    //size={"lg"}
    width={["0vw", "4vw"]}
    height={["0vh", "6vh"]}
    fontSize={"xl"}
    type="submit"
    {...props}
  >
    .GG
  </Button>
);
