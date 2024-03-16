import { useState } from "react";
import lang from "../../lang";
import InputText from "../InputText";
import styles from "./styles.module.scss";
import closeIcon from "../../assets/close.svg";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

type SearchOverlayProps = {
  onClose: () => void;
  onSearch: (keyword: string) => void;
};

const SearchOverlay = ({ onClose, onSearch }: SearchOverlayProps) => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const onSubmitSearch = (e: any) => {
    e.preventDefault();
    navigate(`/${searchValue}`);
    onSearch(searchValue);
  };

  const onChangeSearch = (e: any) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={styles.overlay}>
      <div onClick={onClose} className={styles.close_icon}>
        <img src={closeIcon} />
      </div>
      <form className={styles.search_form}>
        <p>Search</p>
        <InputText
          placeholder={lang.input.placeholderSearch}
          onChange={onChangeSearch}
          value={searchValue}
        />
        <Button onClick={onSubmitSearch} variant="purple" size="md" isFullWidth>
          Search
        </Button>
      </form>
    </div>
  );
};

export default SearchOverlay;
