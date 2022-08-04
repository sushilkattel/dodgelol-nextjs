//imports
import { Stack, Text, Flex, Center, Divider } from "@chakra-ui/react";
import { ResponsiveRadialBar } from "@nivo/radial-bar";
import { summonerDataQuery } from "../apiUtils/apiUtils";

interface SummonerData {
  sLp: string;
}

export const StatCs = (props: SummonerData) => {
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
      <Text marginLeft={["1em", "15em"]}>League Points</Text>
      <ResponsiveRadialBar
        data={data}
        endAngle={360}
        colors={{ scheme: "pastel1" }}
        margin={{ top: 25, right: 0, bottom: 25, left: 0 }}
      />
      <Text paddingLeft={["2em", "15em"]}>{parseInt(props.sLp)}/100 LP</Text>
    </Stack>
  );
};
StatCs.defaultProps = {
  sLp: "0",
};
