//imports
import { Stack, Text, Flex, Center, Divider } from '@chakra-ui/react';
import { ResponsiveRadialBar } from '@nivo/radial-bar'

interface SummonerData {
    sLp: string;
}

export const StatCs = (props: SummonerData) => {
    const percentage = (parseInt(props.sLp)/100) * 360
    const left = 100 - parseInt(props.sLp)
    const data = [{
        "id": "",
        "data": [
          {
            "x": "LP",
            "y": parseInt(props.sLp)
          },
          {
              "x": "remaining",
              "y": left
          }
        ]
      }];
      console.log(percentage)
      return (
          <Stack w={"90%"} h={"80%"} marginLeft={"-2em"}>
              <Text marginLeft={"8em"}>League Points</Text>
            <ResponsiveRadialBar
                data={data}
                endAngle={360}
                colors={{ scheme: 'pastel1' }}
            />
            <Text paddingLeft={"9em"}>{parseInt(props.sLp)}/100 LP</Text>
            </Stack>
      )
}