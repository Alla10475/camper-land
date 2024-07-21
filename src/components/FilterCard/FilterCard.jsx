import css from "./FilterCard.module.css" 
import sprite from "../../assets/icons.svg";

const FilterCard = ({text, name, width, height, left, right }) => {
    const svg = `${sprite}#${name}`;
    
    const style = {
        paddingLeft: `${left} `,
        paddingRight: `${right}`
    };

  return (
    <div className={css.filterCardWrap} style={style}>
      <svg className={css.icon} width={width} height={height}>
        <use href={svg}></use>
      </svg>
      <p className={css.text}>{text}</p>
    </div>
  );
};

export default FilterCard