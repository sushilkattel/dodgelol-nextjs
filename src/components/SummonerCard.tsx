import { Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    useColorModeValue,
} from "@chakra-ui/react";

interface SummonerDetails {
    summonerName: string;
    summonerLvl: string;
    summonerIcon: string;
}
export const SummonerCard = (props: SummonerDetails) => (
    <Center py={6}>
    <Box
      maxW={'25vw'}
      w={'25vw'}
      maxH={'80vh'}
      h={'80vh'}
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'2xl'}
      rounded={'lg'}
      overflow={'hidden'}>
      <Image
        h={'20vh'}
        w={'full'}
        src={
          'https://drive.google.com/uc?id=1s1BAPAbFmroGPoUVCnZnhHIhTnM6GZkn'
        }
        objectFit={'cover'}
      />
      <Flex justify={'center'} mt={-20}>
        <Avatar
          size={'2xl'}
          src={
            `https://ddragon.leagueoflegends.com/cdn/11.21.1/img/profileicon/${props.summonerIcon}.png`
          }
          css={{
            border: '2px solid white',
          }}
        />
      </Flex>

      <Box p={6}>
        <Stack spacing={0} align={'center'} mb={5}>
          <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
            {props.summonerName}
          </Heading>
          <Text color={'gray.500'}>lvl {props.summonerLvl}</Text>
        </Stack>

      </Box>
    </Box>
  </Center>
)