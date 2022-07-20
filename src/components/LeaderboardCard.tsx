import { Avatar, Box, Flex, Heading, HStack, Text, useColorModeValue, Image, Stack, VStack, Center} from "@chakra-ui/react";

interface MatchDetails {
    name: string,
    points: any,
    tagLine: string,
    place: string,
}
function randomPic() {
    const randomNum = Math.floor(Math.random() * (13 - 1 + 1)) + 1;
    return `http://localhost:3080/images/${randomNum}.jpeg`
}

export const LeaderboardCard = (props: MatchDetails) => (
    <Flex p={'1vh'}>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        </style>
        <Box
          maxW={"35vw"}
          w={"35vw"}
          maxH={"15vh"}
          h={"12vh"}
          bg={'#FFF4FE'}
          rounded={"3xl"}
          overflow={"hidden"}
          alignSelf={'center'}
          alignContent={'center'}
          alignItems={'center'}
        >
            <HStack mt='2vh'>
                <Text fontFamily={'Bebas Neue'} alignSelf='flex-start' pl={'0.5vw'} pt='1vh' fontSize={'3xl'}>#{props.place}</Text>
                <Image
                    src={randomPic()}
                    style={{width: '3.5vw', alignSelf: 'flex-start', borderRadius: 100}}
                    ml='0.5vw'
                    />
                <Text fontFamily={'Bebas Neue'} alignSelf='flex-start' pl={'0.5vw'} pt='1vh' fontSize={'3xl'}>{props.name}</Text>
                    <Text fontFamily={'Bebas Neue'}  pl={'0.5vw'} fontSize={'3xl'}>{props.points} rr</Text>
            </HStack>

        </Box>
    </Flex>
)