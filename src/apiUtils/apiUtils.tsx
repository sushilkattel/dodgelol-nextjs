export const summonerDataQuery = (summonerName?: string): string => {
  return `http://localhost:3080/summonerDataQuery?user=${summonerName}`;
};
export const summonerRankedQuery = (id?: string): string => {
  return `http://localhost:3080/summonerRankedQuery?user=${id}`
}
export const summonerGameQuery = (gameId?: string): string => {
  return `http://localhost:3080/summonerGameQuery?user=${gameId}`
}
export const summonerMatchlistQuery = (puuid?: string): string => {
  return `http://localhost:3080/summonerMatchlistQuery?user=${puuid}`
}
