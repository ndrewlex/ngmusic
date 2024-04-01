import type { AlbumListResponse } from "./type";

async function getAlbumList(term: string): Promise<AlbumListResponse> {
  const res = await fetch(`https://itunes.apple.com/search?term=${term}`);
  const data = await res.json();
  return data;
}

export default getAlbumList;
