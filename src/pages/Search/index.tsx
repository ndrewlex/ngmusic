import styles from "./styles.module.scss";
import ngMusicIcon from "./../../assets/ngmusic.svg";
import searchIcon from "./../../assets/search.svg";
import menuIcon from "./../../assets/menu.svg";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import getAlbumList from "../../services/getAlbumList";
import {
  AlbumListResponse,
  AlbumListResult,
} from "../../services/getAlbumList/type";
import dollarIcon from "../../assets/currency-dollar.svg";

const LIMIT = 4;
const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const searchValue = searchParams.get("name") || "";
  const [albums, setAlbums] = useState<AlbumListResponse>({
    resultCount: 0,
    results: [],
  });

  const [loadingAlbums, setLoadingAlbums] = useState(true);
  const [page, setPage] = useState(1);

  const [albumList, setAlbumList] = useState<AlbumListResult[]>([]);

  const fetchAlbumList = async () => {
    setLoadingAlbums(true);
    const { data } = await getAlbumList(searchValue);
    if (data) {
      const albumListData = data.results.slice(0, LIMIT);
      setAlbums(data);
      setAlbumList(albumListData);
    }
    setLoadingAlbums(false);
  };

  const onSearch = () => {
    navigate("/");
  };

  const onLoadMore = () => {
    const newAlbumListData = albums.results.slice(0, (page + 1) * LIMIT);
    setAlbumList(newAlbumListData);
    setPage((p) => p + 1);
  };

  useEffect(() => {
    fetchAlbumList();
  }, []);

  const isLoadMore =
    albums.results.length > 0 && albums.results.length > albumList.length;

  return (
    <div className={styles.container}>
      <nav>
        <img src={menuIcon} />
        <img src={ngMusicIcon} />
        <img src={searchIcon} onClick={onSearch} />
      </nav>
      <main>
        {loadingAlbums ? (
          <p className={styles.search_result}>Loading...</p>
        ) : (
          <Fragment>
            <p className={styles.search_result}>
              Search result for: <span>{searchValue}</span>
            </p>
            <div className={styles.card_container}>
              {albumList.map((album, key) => {
                return (
                  <div key={key} className={styles.card}>
                    <div className={styles.album_image}>
                      <img src={album.artworkUrl100} />
                    </div>
                    <div className={styles.card_detail}>
                      <div className={styles.card_detail_content}>
                        <p className={styles.artist}>{album.artistName}</p>
                        <p className={styles.album_name}>
                          {album.collectionName}
                        </p>
                      </div>
                      <div className={styles.card_detail_bottom}>
                        <div className={styles.genre}>
                          {album.primaryGenreName}
                        </div>

                        <div className={styles.album_price}>
                          <img src={dollarIcon} />
                          <p>{album.collectionPrice}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {isLoadMore && (
              <button className={styles.load_more} onClick={onLoadMore}>
                Load More
              </button>
            )}
          </Fragment>
        )}
      </main>
    </div>
  );
};

export default SearchPage;
