import styles from "./styles.module.scss";
import Button from "../../components/Button";
import AlbumCard from "../../components/AlbumCard";
import { AlbumListResult } from "../../services/getAlbumList/type";
import { Fragment, useState } from "react";
import lang from "../../lang";
import { useQuery } from "@tanstack/react-query";
import getAlbumList from "../../services/getAlbumList";
import useSearchAlbums from "../../hooks/useSearchAlbums";

type SearchResultListType = {
  data: AlbumListResult[];
  term: string;
};

const ALBUM_LIMIT = 4;

const SearchResultData = ({ data, term }: SearchResultListType) => {
  const [page, setPage] = useState(1);

  const [albumList, setAlbumList] = useState<AlbumListResult[]>(
    data.slice(0, page * ALBUM_LIMIT)
  );

  const isLoadMore = data.length > 0 && data.length > albumList.length;

  const onLoadMore = () => {
    const newAlbumListData = data.slice(0, (page + 1) * ALBUM_LIMIT);
    setAlbumList(newAlbumListData);
    setPage((p) => p + 1);
  };

  return (
    <Fragment>
      <p className={styles.search_result}>
        {lang.searchResultFor}: <span>{term}</span>
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
  );
};

const SearchResultList = () => {
  const { term } = useSearchAlbums();
  const { data, isError, isLoading } = useQuery({
    queryKey: ["searchAlbums", term],
    queryFn: () => getAlbumList(term),
    staleTime: 0,
    gcTime: 0,
  });

  if (isLoading) {
    return <p className={styles.search_result}>Loading...</p>;
  }

  if (isError) {
    return <p className={styles.search_result}>Error</p>;
  }

  return <SearchResultData data={data?.results ?? []} term={term} />;
};

export default SearchResultList;
