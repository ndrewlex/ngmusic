import styles from "./styles.module.scss";
import { useParams } from "react-router-dom";
import { Fragment, useCallback, useEffect, useState } from "react";
import getAlbumList from "../../services/getAlbumList";
import {
  AlbumListResponse,
  AlbumListResult,
} from "../../services/getAlbumList/type";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import AlbumCard from "../../components/AlbumCard";
import lang from "../../lang";

const ALBUM_LIMIT = 4;

const SearchResultPage = () => {
  const { keyword } = useParams();
  const [albums, setAlbums] = useState<AlbumListResponse>({
    resultCount: 0,
    results: [],
  });

  const [loadingAlbums, setLoadingAlbums] = useState(true);
  const [page, setPage] = useState(1);

  const [albumList, setAlbumList] = useState<AlbumListResult[]>([]);

  const fetchAlbumList = useCallback(async () => {
    setLoadingAlbums(true);
    const { data } = await getAlbumList(keyword);
    if (data) {
      const albumListData = data.results.slice(0, ALBUM_LIMIT);
      setAlbums(data);
      setAlbumList(albumListData);
    }
    setLoadingAlbums(false);
  }, [keyword]);

  const onLoadMore = () => {
    const newAlbumListData = albums.results.slice(0, (page + 1) * ALBUM_LIMIT);
    setAlbumList(newAlbumListData);
    setPage((p) => p + 1);
  };

  useEffect(() => {
    if (keyword) {
      fetchAlbumList();
    }
  }, [keyword]);

  const isLoadMore =
    albums.results.length > 0 && albums.results.length > albumList.length;

  return (
    <div className={styles.container}>
      <Navbar />
      <main>
        {loadingAlbums ? (
          <p className={styles.search_result}>{lang.loading}</p>
        ) : (
          <Fragment>
            <p className={styles.search_result}>
              {lang.searchResultFor}: <span>{keyword}</span>
            </p>
            <div className={styles.card_container}>
              {albumList.map((album, key) => {
                return <AlbumCard key={key} {...album} />;
              })}
            </div>
            {isLoadMore && (
              <Button
                variant="grey"
                size="sm"
                onClick={onLoadMore}
                className={styles.load_more}
              >
                {lang.loadMore}
              </Button>
            )}
          </Fragment>
        )}
      </main>
    </div>
  );
};

export default SearchResultPage;
