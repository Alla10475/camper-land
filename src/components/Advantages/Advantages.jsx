import css from "./Advantages.module.css"
import img from "../../assets/images/hero.webp"
import { NavLink } from "react-router-dom";

const Advantages = () => {
  return (
    <div className={css.advantages}>
      <div className={css.heroImgWrap}>
        <img src={img} alt="red camper" width={900} />
      </div>

      <div className={css.advantageWrap}>
        <h2 className={css.subtitle}>Our Advantages</h2>
        <div>
          <h3 className={css.advantageItem}>New Campers</h3>
          <p className={css.text}>We offer new and modern camper models.</p>
        </div>
        <div>
          <h3 className={css.advantageItem}>Affordable Prices</h3>
          <p className={css.text}>Competitive prices on all camper models.</p>
        </div>
        <div>
          <h3 className={css.advantageItem}>Easy Booking</h3>
          <p className={css.text}>Simple online booking process.</p>
        </div>
        <NavLink to="/catalog" className={css.catalog}>
          Catalog
        </NavLink>
      </div>
    </div>
  );
}

export default Advantages