import styles from "./styles.module.scss";
import ngMusicIcon from "./../../assets/ngmusic.svg";
import searchIcon from "./../../assets/search.svg";
import menuIcon from "./../../assets/menu.svg";
import { useSearchParams } from "react-router-dom";

const SearchPage = () => {
  const [searchParams] = useSearchParams();

  const searchValue = searchParams.get("name");
  return (
    <div className={styles.container}>
      <nav>
        <img src={menuIcon} />
        <img src={ngMusicIcon} />
        <img src={searchIcon} />
      </nav>
      <main>
        <p>
          Search result for: <span>{searchValue}</span>
        </p>
      </main>
    </div>
  );
};

export default SearchPage;
