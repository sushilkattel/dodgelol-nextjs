import { Avatar, Box, Flex, Heading, HStack, Text, useColorModeValue, Image, Stack, VStack} from "@chakra-ui/react";

interface MatchDetails {
    champion: string;
    kills: any;
    deaths: any;
    assists: any;
    cs: any;
    time: any;
    status: boolean;
    lvl: any;
    lane: string;
}

export const MatchCard = (props: MatchDetails) => {
    const getKDA = () => {
        const kill = parseInt(props.kills)
        const death = parseInt(props.deaths)
        const assist = parseInt(props.assists)
        if(death == 0) {
            return kill + assist
        }
        const sum = kill + assist
        return parseFloat((sum / death).toFixed(2))
    }
    const getCs = () => {
        const time = parseFloat(props.time)
        const cs = parseInt(props.cs)
        return (cs / time).toFixed(1)
    }
    return(
    <Flex p={'1vh'}>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        </style>
        <Box
          maxW={"25vw"}
          w={"25vw"}
          maxH={"25vh"}
          h={"10vh"}
          bg={'#FFF4FE'}
          rounded={"3xl"}
          overflow={"hidden"}
        >
            <HStack>
                <Image
                    src={`https://ddragon.leagueoflegends.com/cdn/12.13.1/img/champion/${props.champion}.png`}
                    style={{width: '2.5vw', alignSelf: 'flex-start', borderRadius: 25}}
                    mt='1.5vh'
                    ml='0.5vw'
                />
                <VStack>
                    <Text fontFamily={'Bebas Neue'} alignSelf='flex-start' mt={'1vh'} mb={'-2vh'} fontSize={20}>{props.champion}</Text>
                    <Text fontFamily={'Bebas Neue'} alignSelf='flex-start' mt={'-2vh'} fontSize={14}>lvl{props.lvl}</Text>
                </VStack>
                <VStack>
                    <Text fontFamily={'Bebas Neue'} alignSelf='flex-start' mt={'1vh'} mb={'-2vh'} fontSize={20}>{props.kills}/{props.deaths}/{props.assists}</Text>
                    <Text fontFamily={'Bebas Neue'} alignSelf='flex-start' mt={'-2vh'} fontSize={14}>{getKDA()} KDA</Text>
                </VStack>
                <VStack>
                    <Text fontFamily={'Bebas Neue'} alignSelf='flex-start' mt={'1vh'} mb={'-2vh'} fontSize={20}>{props.cs} CS</Text>
                    <Text fontFamily={'Bebas Neue'} alignSelf='flex-start' mt={'-2vh'} fontSize={14}>({getCs()})</Text>
                </VStack>
            </HStack>
        </Box>
    </Flex>
);}
MatchCard.defaultProps = {
    champion: "NA",
    kills: 0,
    deaths: 0,
    assists: 0,
    cs: 0,
    time: 0,
    status: "WIN"
  };