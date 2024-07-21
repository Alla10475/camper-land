import sprite from "../../assets/icons.svg";
import css from "./Categories.module.css";

const Categories = ({ icon, text }) => {
    return (
      <div className={css.container}>
        <svg width={20} height={20}>
          <use href={`${sprite}#icon-${icon}`}></use>
        </svg>
        <p>{text}</p>
      </div>
    );
}

export default Categories