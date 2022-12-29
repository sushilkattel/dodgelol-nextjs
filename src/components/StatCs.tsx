//imports
import { Stack, Text, Flex, Center, Divider } from "@chakra-ui/react";
import { ResponsiveRadialBar } from "@nivo/radial-bar";
import { summonerDataQuery } from "../apiUtils/apiUtils";

interface SummonerData {
  sLp: string;
}

export const StatCs = (props: SummonerData) => {
  const fontColor = "#15172A"
  const percentage = (parseInt(props.sLp) / 100) * 360;
  const left = 100 - parseInt(props.sLp);
  const data = [
    {
      id: "",
      data: [
        {
          x: "LP",
          y: parseInt(props.sLp),
        },
        {
          x: "remaining",
          y: left,
        },
      ],
    },
  ];
  console.log(percentage);
  return (
    <Stack w={"100%"} h={"100%"} ml={["20%", "-30%"]} mt={"-2vh"}>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      </style>
      <Text align={"center"} fontFamily={"Bebas Neue"} fontSize={20} color={fontColor}>
        League Points
      </Text>
      <ResponsiveRadialBar
        data={data}
        endAngle={360}
        colors={{ scheme: "pastel1" }}
        margin={{ top: 25, right: 0, bottom: 25, left: 0 }}
      />
      <Text align={"center"} fontFamily={"Bebas Neue"} fontSize={20} color={fontColor}>
        {parseInt(props.sLp)}/100 LP
      </Text>
    </Stack>
  );
};
StatCs.defaultProps = {
  sLp: "0",
};
