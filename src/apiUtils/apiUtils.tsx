export const summonerDataQuery = (summonerName?: string): string => {
  return `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`;
};
