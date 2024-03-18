import ngMusicIcon from "./../../assets/ngmusic.svg";
import searchIcon from "./../../assets/search.svg";
import menuIcon from "./../../assets/menu.svg";
import { Fragment, useState } from "react";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import SearchOverlay from "../SearchOverlay";
import useSearchAlbums from "../../hooks/useSearchAlbums";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpenMenu, setOpenMenu] = useState(false);
  const { onSearch } = useSearchAlbums();
  const onOpenMenu = () => setOpenMenu(true);

  const onCloseMenu = () => setOpenMenu(false);

  const handleSearch = (keyword: string) => {
    onSearch(keyword);
    onCloseMenu();
  };

  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <Fragment>
      <nav className={styles.navbar}>
        <div>
          <img src={menuIcon} onClick={goToHomePage} />
          <img src={ngMusicIcon} onClick={goToHomePage} />
          <img src={searchIcon} onClick={onOpenMenu} />
        </div>
      </nav>

      {isOpenMenu && (
        <SearchOverlay onClose={onCloseMenu} onSearch={handleSearch} />
      )}
    </Fragment>
  );
};

export default Navbar;
