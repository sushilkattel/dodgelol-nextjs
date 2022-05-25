export const summonerDataQuery = (summonerName?: string): string => {
  return `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`;
};
export const summonerRankedQuery = (id?: string): string => {
  return `https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}`
}