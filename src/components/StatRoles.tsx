//imports
import { Stack, Text, Flex, Center, Divider } from "@chakra-ui/react";
import { ResponsiveBar } from "@nivo/bar";

interface SummonerData {
  roles: {};
}

export const StatRoles = (props: SummonerData) => {
  const fontColor = "#15172A"
  const data = [
    {
      map: "TOP",
      lane: props.roles["top"],
    },
    {
      map: "MIDDLE",
      lane: props.roles["mid"],
    },
    {
      map: "BOTTOM",
      lane: props.roles["bottom"],
    },
    {
      map: "JUNGLE",
      lane: props.roles["jg"],
    },
    {
      map: "ARAM/OTHER",
      lane: props.roles["aram"],
    },
  ];
  const theme = {
    fontFamily: "Bebas Neue",
    fontSize: 15,
    background: "#fff",
    axis: {
      fontSize: "14px",
      FontFamily: "Bebas Neue",
      tickColor: "#black",
      ticks: {
        line: {
          stroke: "#555555",
        },
        text: {
          fill: "black",
          FontFamily: "Bebas Neue",
        },
      },
      legend: {
        text: {
          fill: "#aaaaaa",
          FontFamily: "Bebas Neue",
        },
      },
    },
    grid: {
      line: {
        stroke: "#eee",
      },
    },
  };
  return (
    <Stack w={["150%", "90%"]} h={["80%", "100%"]} ml={["20%", "-40%"]}>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      </style>
      <Text fontFamily={"Bebas Neue"} fontSize={20} color={fontColor}>
        Summoner Lanes Played Recently
      </Text>
      <ResponsiveBar
        data={data}
        theme={theme}
        keys={["lane"]}
        indexBy="map"
        margin={{ top: 10, right: 150, bottom: 50, left: 20 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        axisLeft={{
          tickValues: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        }}
        colors={{ scheme: "pastel1" }}
        borderColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Stack>
  );
};
