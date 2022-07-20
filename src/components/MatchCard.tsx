import { Avatar, Box, Flex, Heading, HStack, Text, useColorModeValue, Image, Stack, VStack} from "@chakra-ui/react";

interface MatchDetails {
    champion: string;
    kills: any;
    deaths: any;
    assists: any;
    cs: any;
    time: any;
    status: boolean;
}

export const MatchCard = (props: MatchDetails) => (
    <Flex>
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
                    src={`https://ddragon.leagueoflegends.com/cdn/11.12.1/img/champion/Yasuo.png`}
                    style={{width: '2.5vw', alignSelf: 'flex-start', borderRadius: 25}}
                    mt='1.5vh'
                    ml='0.5vw'
                />
                <VStack>
                    <Text fontFamily={'Bebas Neue'} alignSelf='flex-start' mt={'1vh'} mb={'-2vh'} fontSize={20}>Yasuo</Text>
                    <Text fontFamily={'Bebas Neue'} alignSelf='flex-start' mt={'-2vh'} fontSize={14}>lvl16</Text>
                </VStack>
                <VStack>
                    <Text fontFamily={'Bebas Neue'} alignSelf='flex-start' mt={'1vh'} mb={'-2vh'} fontSize={20}>10/10/10</Text>
                    <Text fontFamily={'Bebas Neue'} alignSelf='flex-start' mt={'-2vh'} fontSize={14}>2.00 KDA</Text>
                </VStack>
                <VStack>
                    <Text fontFamily={'Bebas Neue'} alignSelf='flex-start' mt={'1vh'} mb={'-2vh'} fontSize={20}>70 CS</Text>
                    <Text fontFamily={'Bebas Neue'} alignSelf='flex-start' mt={'-2vh'} fontSize={14}>(5)</Text>
                </VStack>
            </HStack>
        </Box>
    </Flex>
);
MatchCard.defaultProps = {
    champion: "NA",
    kills: 0,
    deaths: 0,
    assists: 0,
    cs: 0,
    time: 0,
    status: "WIN"
  };