import styles from "./styles.module.scss";
import logoIcon from "./../../assets/logo.svg";
import { createSearchParams, useNavigate } from "react-router-dom";
import { type ChangeEvent, useState } from "react";

const HomePage = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const onSubmitSearch = (e: any) => {
    e.preventDefault();
    navigate({
      pathname: "search",
      search: `?${createSearchParams({ name: searchValue })}`,
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logoIcon} />
      </div>
      <form className={styles.menu}>
        <input
          type="text"
          placeholder="Artist / Album / Title"
          onChange={onChangeSearch}
        />
        <button onClick={onSubmitSearch}>Search</button>
      </form>
    </div>
  );
};

export default HomePage;
