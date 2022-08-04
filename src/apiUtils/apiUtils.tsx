export const summonerDataQuery = (summonerName?: string): string => {
  return `https://dodgelol.gg/api/summonerDataQuery?user=${summonerName}`;
};
export const summonerRankedQuery = (id?: string): string => {
  return `https://dodgelol.gg/api/summonerRankedQuery?user=${id}`;
};
export const summonerGameQuery = (gameId?: string): string => {
  return `https://dodgelol.gg/api/summonerGameQuery?user=${gameId}`;
};
export const summonerMatchlistQuery = (puuid?: string): string => {
  return `https://dodgelol.gg/api/summonerMatchlistQuery?user=${puuid}`;
};
