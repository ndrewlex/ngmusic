import fetcher from "../fetcher";
import { AlbumListResponse } from "./type";

const getAlbumList = async (params?: string) => {
  const res = await fetcher<AlbumListResponse>(
    `https://itunes.apple.com/search?term=${params}`
  );
  return res;
};

export default getAlbumList;
