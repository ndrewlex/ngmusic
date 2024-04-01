import styles from "./styles.module.scss";
import Navbar from "../../components/Navbar";
import SearchResultList from "./SearchResultList";

const SearchResultPage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main>
        <SearchResultList />
      </main>
    </div>
  );
};

export default SearchResultPage;
