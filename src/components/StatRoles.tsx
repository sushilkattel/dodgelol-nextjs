//imports
import { Stack, Text, Flex, Center, Divider } from '@chakra-ui/react';
import { ResponsiveBar } from '@nivo/bar'

interface SummonerData {
    roles: string[]
}

export const StatRoles = (props: SummonerData) => {
    var top = 0;
    var mid = 0;
    var bottom = 0;
    var jg = 0;
    const roles = props.roles
    const updateRoles = () => {
      for(let i = 0; i < roles.length; i++) {
        if(roles[i] == "TOP") {
          top++
        }
        if(roles[i] == "MIDDLE") {
          mid++
        }
        if(roles[i] == "BOTTOM") {
          bottom++
        }
        if(roles[i] == "JUNGLE") {
          jg++
        }
      }
    }
    const data = [{
        "id": "",
        "data": [
          {
            "country": "AD",
            "hot dog": 115,
            "hot dogColor": "hsl(345, 70%, 50%)",
            "burger": 7,
            "burgerColor": "hsl(316, 70%, 50%)",
            "sandwich": 172,
            "sandwichColor": "hsl(20, 70%, 50%)",
            "kebab": 188,
            "kebabColor": "hsl(255, 70%, 50%)",
            "fries": 161,
            "friesColor": "hsl(98, 70%, 50%)",
            "donut": 25,
            "donutColor": "hsl(31, 70%, 50%)"
          },
          {
            "country": "AE",
            "hot dog": 177,
            "hot dogColor": "hsl(158, 70%, 50%)",
            "burger": 142,
            "burgerColor": "hsl(55, 70%, 50%)",
            "sandwich": 34,
            "sandwichColor": "hsl(297, 70%, 50%)",
            "kebab": 164,
            "kebabColor": "hsl(235, 70%, 50%)",
            "fries": 27,
            "friesColor": "hsl(243, 70%, 50%)",
            "donut": 79,
            "donutColor": "hsl(59, 70%, 50%)"
          },
          {
            "country": "AF",
            "hot dog": 32,
            "hot dogColor": "hsl(343, 70%, 50%)",
            "burger": 33,
            "burgerColor": "hsl(204, 70%, 50%)",
            "sandwich": 191,
            "sandwichColor": "hsl(266, 70%, 50%)",
            "kebab": 170,
            "kebabColor": "hsl(268, 70%, 50%)",
            "fries": 45,
            "friesColor": "hsl(66, 70%, 50%)",
            "donut": 21,
            "donutColor": "hsl(329, 70%, 50%)"
          },
          {
            "country": "AG",
            "hot dog": 53,
            "hot dogColor": "hsl(172, 70%, 50%)",
            "burger": 180,
            "burgerColor": "hsl(294, 70%, 50%)",
            "sandwich": 0,
            "sandwichColor": "hsl(284, 70%, 50%)",
            "kebab": 120,
            "kebabColor": "hsl(50, 70%, 50%)",
            "fries": 176,
            "friesColor": "hsl(179, 70%, 50%)",
            "donut": 200,
            "donutColor": "hsl(158, 70%, 50%)"
          }
        ]
      }];
      return (
          <Stack w={"90%"} h={"80%"} marginLeft={"-2em"}>
              <Text marginLeft={"8em"}>League Points</Text>
            <ResponsiveBar
                /*
              // @ts-ignore */
                data={data}
                keys={[
                    'hot dog',
                    'burger',
                    'sandwich',
                    'kebab',
                    'fries',
                    'donut'
                ]}
                indexBy="country"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                colors={{ scheme: 'pastel1' }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: '#38bcb2',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: '#eed312',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'fries'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'sandwich'
                        },
                        id: 'lines'
                    }
                ]}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.6
                        ]
                    ]
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'country',
                    legendPosition: 'middle',
                    legendOffset: 32
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'food',
                    legendPosition: 'middle',
                    legendOffset: -40
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.6
                        ]
                    ]
                }}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                role="application"
                ariaLabel="Nivo bar chart demo"
                barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
            />
            </Stack>
      )
}