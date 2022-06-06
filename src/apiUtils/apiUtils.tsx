export const summonerDataQuery = (summonerName?: string): string => {
  return `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`;
};
export const summonerRankedQuery = (id?: string): string => {
  return `https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}`
}
export const summonerGameQuery = (gameId?: string): string => {
  return `https://americas.api.riotgames.com/lol/match/v5/matches/${gameId}`
}
export const summonerMatchlistQuery = (puuid?: string): string => {
  return `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=10`
}