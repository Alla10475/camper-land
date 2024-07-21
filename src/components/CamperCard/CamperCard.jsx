import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/campers/slice";
import { useState } from "react";
import css from "./CamperCard.module.css";
import sprite from "../../assets/icons.svg";
import clsx from "clsx";
// import Button from "../Button/Button";
import Modal from "../Modal/Modal";

const CamperCard = ({ camper }) => {

  // const [modalCamper, setModalCamper] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
    
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.campers.favorites);
  const isFavorite = favorites.includes(camper._id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(camper._id));
    } else {
      dispatch(addFavorite(camper._id));
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // const handleShowMore = (camper) => {
  //   setModalCamper(camper);
  // };
  const handleShowMore = () => {
    setIsModalOpen(true);
  };

  return (
    <div className={css.cardWrapper}>
      <img className={css.mainImg} src={camper.gallery[0]} alt={camper.name} />
      <div>
        <div className={css.titleWrap}>
          <h2 className={css.subtitle}>{camper.name}</h2>
          <p className={css.price}>&euro;{camper.price}</p>
          <button className={css.favoriteBtn} onClick={handleFavoriteClick}>
            <svg
              className={
                isFavorite
                  ? clsx(css.icon, css.heart, css.active)
                  : clsx(css.icon, css.heart)
              }
              width={24}
              height={22}
            >
              <use href={`${sprite}#icon-favorite`}></use>
            </svg>
          </button>
        </div>
        <div className={css.info}>
          <p className={css.rating}>
            <svg className={clsx(css.icon, css.star)} width={16} height={16}>
              <use href={`${sprite}#icon-star`}></use>
            </svg>
            {camper.rating}({camper.reviews.length} Reviews)
          </p>

          <p>
            <svg className={clsx(css.icon, css.iconLocation)} width={18} height={20}>
              <use href={`${sprite}#icon-location`}></use>
            </svg>
            {camper.location}
          </p>
        </div>

        <div className={css.description}>{camper.description}</div>
        <div className={css.categoriesWrapper}></div>
        <button className={css.showMoreBtn}
          onClick={handleShowMore}
          type="button"
          
        >
          Show more
        </button>
      </div>
      {isModalOpen && <Modal camper={camper} onClose={handleCloseModal} />}
    </div>
  );
};

export default CamperCard;
