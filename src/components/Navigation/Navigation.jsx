import css from "./Navigation.module.css";
import img from "../../assets/images/images.png";
import clsx from "clsx";

import { NavLink } from "react-router-dom"

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  return (
    <header className={css.headerWrapper}>
      <div className={css.imgWrap}>
        <img src={img} alt="camper" width={90} />
      </div>
      <nav className={css.navigation}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={buildLinkClass}>
          Catalog
        </NavLink>
        <NavLink to="/favorites" className={buildLinkClass}>
          Favorites
        </NavLink>
      </nav>
    </header>
  );
}

export default Navigation