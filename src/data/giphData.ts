import { GiphStructure } from "./types";

const getRandomGiph = async (urlApi: string): Promise<GiphStructure[]> => {
  const dataGiphs = await fetch(urlApi);
  const dataResponse = await dataGiphs.json();

  return dataResponse;
};

export default getRandomGiph;
