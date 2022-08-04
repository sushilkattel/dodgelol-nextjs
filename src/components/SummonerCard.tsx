import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  useColorModeValue,
  HStack,
  Divider,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

interface SummonerDetails {
  summonerName: string;
  summonerLvl: string;
  summonerIcon: string;
  sQueue: string;
  sTier: string;
  sRank: string;
  sLp: string;
  sWin: string;
  sLoss: string;
  fQueue: string;
  fTier: string;
  fRank: string;
  fLp: string;
  fWin: string;
  fLoss: string;
}
export const SummonerCard = (props: SummonerDetails) => {
  const [sQueue, setsQueue] = useState(props.sQueue);
  const [fQueue, setfQueue] = useState(props.fQueue);
  var summonerName = props.summonerName;
  var summonerLvl = props.summonerLvl;
  var summonerIcon = props.summonerIcon;
  var soloQueue = useState(sQueue);
  var sTier = props.sTier;
  var sRank = props.sRank;
  var sLp = props.sLp;
  var sWin = props.sWin;
  var sLoss = props.sLoss;
  var flexQueue = useState(fQueue);
  var fTier = props.fTier;
  var fRank = props.fRank;
  var fLp = props.fLp;
  var fWin = props.fWin;
  var fLoss = props.fLoss;
  const rank = {};
  rank["IRON"] =
    "https://lh3.googleusercontent.com/WUWV7aDtQAHnGzAw4XPBe3hrx_vfytHU4SVTZzdS__29Evg33dI25KZJOqgg7OoXV7Ve62m9rkpo-x1rFTo5E8dnEildJ7mp5z8VM7ZCfq2NNT7UvYyhmiZUJFhjsyFgtW2JLJo6Rw=w2400";
  rank["BRONZE"] =
    "https://lh3.googleusercontent.com/sE3cWKDOIpTF26AfHsi6KRnZn1bkBY0-pXI-3vc-7geQ95W918j6LICKXo-9by4E8va-ZpJ99u2ltMMvEDF32_gno31qJuudePp8CZYkQFlxLi-YFcvG3OjzCKHi3SOfTq-JeVSqZg=w2400";
  rank["SILVER"] =
    "https://lh3.googleusercontent.com/-nCGX7CJBFEg-jWr5Hi4MmJq3Z2MWLm7RRNkOIfUgo2zbnta9vFVmUsXoNFr4eqVyHiY4l2hrRSThEIqRjaVa1RcuZKgfyVu_anzZe6A1gPu0ewBMZf75WlNp3yaLOEK1EZi7HVVSA=w2400";
  rank["GOLD"] =
    "https://lh3.googleusercontent.com/nOJ7XRdqtbZaiVJQDDoB4_zivrK5JNlE2ggGXBE7_1x-3OpHxx483y_SgLiofgrw4LsWp8MfWK3-09WejMSKEbKnx3ssDSiuFWqpKaNAi23KUG4gt23QzEjYPBLAHy5ooQA9t7Ls_Q=w2400";
  rank["PLATINUM"] =
    "https://lh3.googleusercontent.com/v2vZH7gJiJnd7l-muGcciB-VVmeSW7mkqSsett4ekLiIdf1T84B2VG-Cg6iE9RcW-YJ-2Mh8ITtcegXFokj00F5WDXJD64gKu702nqBylUFDNkrNLuMuoAx6jclp4GjUubOkeOPKEg=w2400";
  rank["DIAMOND"] =
    "https://lh3.googleusercontent.com/DuwXw7OvSMg-SQBuaC8p46iRqMQt5_DkUcZ2hvu4WTT-M2CNHbWVtn_3MLq89pSDJMq1-NNSHKBlA3NBJeVvlrfbvxxtRU6_SY9Me9y10gIHniicqGxqcFbUX-_0-oAU3ZlAujKNDw=w2400";
  rank["MASTER"] =
    "https://lh3.googleusercontent.com/3h6T_WzUqZyrMwjQ1zZZ08VUnVeQgPeUWB4pV7pbY2ispGVVqdfOPUuOgwICoI-5a1AlQUMlZxAmhRIMjpo1vQLkANmYmZ6jw2aPkrESyzKujtXUssFrkmzTkaiBqHUxJi0I4lMuhQ=w2400";
  rank["GRANDMASTER"] =
    "https://lh3.googleusercontent.com/mvESRBU91R9lBF_pPjotVt4IW00UT2bnpzZ2a4cRxcXq8Qg0unF_H8594zbtHQaWT4SfqSDWQOxrJsmNehG553wi0GnqRELWSSwbySfH5nF1LU335Xh9QsiaZaurCqalZs4-lAv-Hg=w2400";
  rank["CHALLENGER"] =
    "https://lh3.googleusercontent.com/-0Cda9b8O1KtYaSGyKi_uwumt77SrKgEcj5Dys8uu6YOpAwA39sGCP66fE8qw28jAN-DiEzSmIkYDQssdphWTQ0dr8b8lhCnzx0qewQZWphp7EE7HJWgQt_5x3-2RXoLWWStCUsBcg=w2400";
  rank["RANKED_FLEX_SR"] = "Ranked Flex";
  rank["RANKED_SOLO_5x5"] = "Ranked Solo";
  rank["Unranked"] = "https://dodgelol.gg/api/images/unranked.png";
  rank[""] = "https://dodgelol.gg/api/images/unranked.png";
  var sWinrate = Math.round(
    (parseInt(props.sWin) / (parseInt(props.sWin) + parseInt(props.sLoss))) *
      100
  );
  var fWinrate = Math.round(
    (parseInt(props.fWin) / (parseInt(props.fWin) + parseInt(props.fLoss))) *
      100
  );
  if (Number.isNaN(sWinrate)) {
    sWinrate = 0;
  }
  if (Number.isNaN(fWinrate)) {
    fWinrate = 0;
  }
  if (props.sQueue == "RANKED_TFT_DOUBLE_UP") {
    var soloQueue = useState(sQueue);
    var sTier = "";
    var sRank = "Unranked";
    var sLp = "0";
    var sWin = "0";
    var sLoss = "0";
    var flexQueue = useState(fQueue);
    var fTier = "";
    var fRank = "Unranked";
    var fLp = "0";
    var fWin = "0";
    var fLoss = "0";
  }

  useEffect(() => {
    if (props.sQueue == undefined) {
      setsQueue("Ranked Solo");
      setfQueue("Ranked Flex");
    } else if (props.sQueue == "RANKED_TFT_DOUBLE_UP") {
      setsQueue("Ranked Solo");
      setfQueue("Ranked Flex");
    } else if (props.sQueue == "RANKED_SOLO_5x5") {
      setsQueue("Ranked Solo");
      setfQueue("Ranked Flex");
    } else if (props.sQueue == "RANKED_FLEX_SR") {
      setsQueue("Ranked Flex");
      setfQueue("Ranked Solo");
    }
  }, [props.sTier]);

  console.log("After: ", sQueue);
  return (
    <Center py={6} mt={[0, "-1em"]}>
      <Box
        maxW={["80vw", "25vw"]}
        w={["80vw", "25vw"]}
        maxH={"100%"}
        h={"auto"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        overflow={"hidden"}
      >
        <Image
          h={"20vh"}
          w={"full"}
          src={"https://dodgelol.gg/api/images/bg.png"}
          objectFit={"cover"}
        />
        <Flex justify={"center"} mt={-20}>
          <Avatar
            boxSize={"8em"}
            src={`https://ddragon.leagueoflegends.com/cdn/11.21.1/img/profileicon/${props.summonerIcon}.png`}
            css={{
              border: "2px solid white",
            }}
          />
        </Flex>

        <Box p={6} mb={5}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Heading fontSize={"4xl"} fontWeight={500} fontFamily={"body"}>
              {summonerName}
            </Heading>
            <Text color={"gray.500"} fontSize={"2xl"}>
              lvl {summonerLvl}
            </Text>
          </Stack>
          <HStack>
            <Stack spacing={0} align={"center"} ml={"2vw"}>
              <Text fontFamily={"body"} fontSize={"2xl"} fontWeight={400}>
                {sQueue}
              </Text>
              <Stack alignSelf={"baseline"} alignItems={"center"}>
                <Image
                  src={rank[sTier]}
                  objectFit="cover"
                  width={"6em"}
                  height={"7em"}
                />
                <Text fontSize={15} lineHeight={1}>
                  {sTier} {sRank}
                </Text>
                <Text fontSize={15} lineHeight={1}>
                  W: {sWin} | L: {sLoss}
                </Text>
                <Text fontSize={15} lineHeight={1}>
                  {sLp} LP
                </Text>
                <Text fontSize={15} lineHeight={1}>
                  {sWinrate}%
                </Text>
              </Stack>
            </Stack>
            <Center height="8em">
              <Divider orientation="vertical" />
            </Center>
            <Stack spacing={0} align={"center"}>
              <Text fontFamily={"body"} fontSize={"2xl"} fontWeight={400}>
                {fQueue}
              </Text>
              <Image
                src={rank[fTier]}
                objectFit="cover"
                width={"6em"}
                height={"7em"}
              />
              <Text fontSize={15} lineHeight={1.5}>
                {fTier} {fRank}
              </Text>
              <Text fontSize={15} lineHeight={1.5}>
                W: {fWin} | L: {fLoss}
              </Text>
              <Text fontSize={15} lineHeight={1.5}>
                {fLp} LP
              </Text>
              <Text fontSize={15} lineHeight={1.5}>
                {fWinrate}%
              </Text>
            </Stack>
          </HStack>
        </Box>
      </Box>
    </Center>
  );
};
SummonerCard.defaultProps = {
  summonerName: "Unknown",
  summonerLvl: "0",
  summonerIcon: "0",
  sTier: "",
  sRank: "Unranked",
  sLp: "0",
  sWin: "0",
  sLoss: "0",
  fTier: "",
  fRank: "Unranked",
  fLp: "0",
  fWin: "0",
  fLoss: "0",
};
