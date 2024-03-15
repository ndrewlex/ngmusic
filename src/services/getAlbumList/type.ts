export type AlbumListResult = {
  trackId: number;
  artistName: string;
  trackName: string;
  primaryGenreName: string;
  trackPrice: number;
  artworkUrl100: string;
  collectionName: string;
  collectionPrice: number;
};

export type AlbumListResponse = {
  resultCount: number;
  results: AlbumListResult[];
};
