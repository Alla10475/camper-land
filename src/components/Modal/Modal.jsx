import { useRef, useEffect, useState } from "react";
import css from "./Modal.module.css";
import sprite from "../../assets/icons.svg";
// import FeaturesList from "../FeaturesList/FeaturesList";
import BookingForm from "../BookingForm/BookingForm";
import clsx from "clsx";
import VehicleDetails from "../VehicleDetails/VehicleDetails";
import ReviewsList from "../ReviewsList/ReviewsList";

const Modal = ({ onClose, camper }) => {
  const [activeTab, setActiveTab] = useState("features");
  const wrapperRef = useRef(null);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      onClose();
    }
  };

  const handleDocumentKeyDown = (event) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleDocumentKeyDown);
    return () => {
      document.removeEventListener("keydown", handleDocumentKeyDown);
    };
  }, [onClose]);

  return (
    <div className={css.backdrop} onClick={handleClickOutside}>
      <div className={css.modal} ref={wrapperRef}>
        <div className={css.mainContainer}>
          <div className={css.top}>
            <h2 className={css.title}>{camper.name}</h2>
            <button className={css.btn} onClick={onClose}>
              <svg
                className={css.icon}
                width="32"
                height="32"
                aria-label="btn icon"
              >
                <use href={`${sprite}#icon-close`} />
              </svg>
            </button>
          </div>
          <div className={css.details}>
            <div className={css.secondaryContainer}>
              <div className={css.ratingContainer}>
                <svg
                  className={clsx(css.icon, css.star)}
                  width="16"
                  height="16"
                  aria-label="btn icon"
                >
                  <use href={`${sprite}#icon-rating`} />
                </svg>
                <p
                  className={css.rating}
                >{`${camper.rating}(${camper.reviews.length} Reviews)`}</p>
              </div>
              <div className={css.ratingContainer}>
                <svg
                  className={css.icon}
                  width="16"
                  height="16"
                  aria-label="btn icon"
                >
                  <use href={`${sprite}#icon-map-pin`} />
                </svg>
                <p>{camper.location}</p>
              </div>
            </div>
            <h3 className={css.title}>&euro;{camper.price}</h3>
          </div>
        </div>
        <div className={css.scrollable}>
          <div className={css.imagesContainer}>
            {camper.gallery.map((img, index) => (
              <div className={css.imgContainer} key={`image-${index}`}>
                <img className={css.img} src={img} alt="camper" />
              </div>
            ))}
          </div>

          <p className={css.description}>{camper.description}</p>

          <div className={css.tabContainer}>
            <button
              className={`${css.btn} ${css.tabBtn} ${
                activeTab === "features" ? css.active : ""
              }`}
              onClick={() => setActiveTab("features")}
            >
              Features
            </button>
            <button
              className={`${css.btn} ${css.tabBtn} ${
                activeTab === "reviews" ? css.active : ""
              }`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews
            </button>
          </div>

          <div className={css.separator}></div>

          {activeTab === "features" && (
            <div className={css.featuresContainer}>
              <div className={css.left}>
                <div className={css.features}>
                  {/* <FeaturesList camper={camper} /> */}
                </div>
                <VehicleDetails camper={camper} />
              </div>
              <BookingForm />
            </div>
          )}
          {activeTab === "reviews" && (
            <div className={css.featuresContainer}>
              <div className={css.left}>
                <div className={css.reviews}>
                  <ReviewsList reviews={camper.reviews} />
                </div>
              </div>
              <BookingForm />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
