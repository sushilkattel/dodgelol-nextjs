import { Avatar, Box, Flex, Heading, HStack, Text, useColorModeValue, Image, Stack, VStack} from "@chakra-ui/react";

interface MatchDetails {
    champion: string;
    kills: any;
    deaths: any;
    assists: any;
    cs: any;
    time: any;
    status: string;
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
          rounded={"lg"}
          overflow={"hidden"}
        >
            <VStack>
                <Image
                    src={`https://ddragon.leagueoflegends.com/cdn/11.12.1/img/champion/Yasuo.png`}
                    style={{width: '2.5vw', alignSelf: 'flex-start', borderRadius: 25}}
                    mt='1.5vh'
                    ml='0.5vw'
                    />
                <Text fontFamily={'Bebas Neue'} alignSelf='flex-start' pl={'0.5vw'}>Yasuo</Text>
            </VStack>

        </Box>
    </Flex>
)