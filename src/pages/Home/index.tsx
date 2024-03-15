import styles from "./styles.module.scss";
import logoIcon from "./../../assets/logo.svg";

const HomePage = () => {
  const onSearch = () => {};
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logoIcon} />
      </div>
      <div className={styles.menu}>
        <input type="text" placeholder="Artist / Album / Title" />
        <button onClick={onSearch}>Search</button>
      </div>
    </div>
  );
};

export default HomePage;
