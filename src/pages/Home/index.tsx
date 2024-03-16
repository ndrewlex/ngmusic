import styles from "./styles.module.scss";
import logoIcon from "./../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { type ChangeEvent, useState } from "react";
import InputText from "../../components/InputText";
import lang from "../../lang";
import Button from "../../components/Button";

const HomePage = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const onSubmitSearch = (e: any) => {
    e.preventDefault();
    navigate(`/${searchValue}`);
  };
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logoIcon} />
      </div>
      <form className={styles.menu}>
        <InputText
          placeholder={lang.input.placeholderSearch}
          onChange={onChangeSearch}
          value={searchValue}
        />
        <Button onClick={onSubmitSearch} variant="white" size="md" isFullWidth>
          {lang.search}
        </Button>
      </form>
    </div>
  );
};

export default HomePage;
