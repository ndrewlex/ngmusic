import { AlbumListResult } from "../../services/getAlbumList/type";
import dollarIcon from "../../assets/currency-dollar.svg";
import styles from "./styles.module.scss";

const AlbumCard = ({
  artistName,
  artworkUrl100,
  collectionName,
  collectionPrice,
  primaryGenreName,
}: AlbumListResult) => {
  return (
    <div className={styles.album_card}>
      <div className={styles.album_image}>
        <img src={artworkUrl100} />
      </div>
      <div className={styles.album_detail}>
        <div className={styles.album_detail_content}>
          <p className={styles.artist}>{artistName}</p>
          <p className={styles.album_name}>{collectionName}</p>
        </div>

        <div className={styles.album_detail_bottom}>
          <div className={styles.genre}>{primaryGenreName}</div>
          <div className={styles.album_price}>
            <img src={dollarIcon} />
            <p>{collectionPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;
