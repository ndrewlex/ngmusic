import ngMusicIcon from "./../../assets/ngmusic.svg";
import searchIcon from "./../../assets/search.svg";
import menuIcon from "./../../assets/menu.svg";
import { Fragment, useState } from "react";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import SearchOverlay from "../SearchOverlay";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpenMenu, setOpenMenu] = useState(false);
  const onOpenMenu = () => setOpenMenu(true);

  const onCloseMenu = () => setOpenMenu(false);

  const onSearch = (keyword: string) => {
    navigate(`/${keyword}`);
    onCloseMenu();
  };

  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <Fragment>
      <nav className={styles.navbar}>
        <div>
          <img src={menuIcon} onClick={onOpenMenu} />
          <img src={ngMusicIcon} onClick={goToHomePage} />
          <img src={searchIcon} onClick={goToHomePage} />
        </div>
      </nav>

      {isOpenMenu && (
        <SearchOverlay onClose={onCloseMenu} onSearch={onSearch} />
      )}
    </Fragment>
  );
};

export default Navbar;
