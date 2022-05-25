import { Text, Image, HStack } from "@chakra-ui/react";
import { Container } from "../../components/Container";
import { Main } from "../../components/Main";
import { SummonerCard } from "../../components/SummonerCard";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getSummonerData, getSummonerRanked } from "../../apiUtils";

const SummonerDetails = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(undefined);
  const [ranked, setRanked] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const summonerName = router.query?.summonerName?.toString() || "";
    const fetchData = async () => {
      const resp = await getSummonerData(summonerName);
      if (resp) {
        setData(resp);
        setLoading(false);
        fetchRank(resp.id)
        return true
      }

    };
    const fetchRank = async (id?: string) => {
      const resp = await getSummonerRanked(id)
      if(resp) {
        setRanked(resp)
        setLoading(false)
        return true
      }
    }

    if (summonerName) {
      fetchData()
    }
  }, [router]);

  if (isLoading) {
    return (
      <Container height="100vh">
        <Text>Loading.</Text>
      </Container>
    );
  }
  //const jsonData = JSON.parse(data)
  const icon = data?.profileIconId?.toString();
  const name = data?.name?.toString();
  const lvl = data?.summonerLevel?.toString();
  return (
    <Container height="100vh">
      <Main>
        <SummonerCard
          summonerIcon={icon}
          summonerName={name}
          summonerLvl={lvl}
          sQueue={ranked[0]?.queueType}
          sTier={ranked[0]?.tier.toString()}
          sRank={ranked[0]?.rank.toString()}
          sLp={ranked[0]?.leaguePoints.toString()}
          sWin={ranked[0]?.wins.toString()}
          sLoss={ranked[0]?.losses.toString()}
          fQueue={ranked[1]?.queueType}
          fTier={ranked[1]?.tier.toString()}
          fRank={ranked[1]?.rank.toString()}
          fLp={ranked[1]?.leaguePoints.toString()}
          fWin={ranked[1]?.wins.toString()}
          fLoss={ranked[1]?.losses.toString()}
        />
      </Main>
    </Container>
  );
};

export default SummonerDetails;
