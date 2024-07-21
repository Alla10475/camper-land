import css from "./Reviews.module.css";
import sprite from "../../assets/icons.svg";
import clsx from "clsx";

const Reviews = ({review}) => {
  return (
    <div className={css.reviewCard}>
      <div className={css.reviewUserInfo}>
        <div className={css.avatar}>{review.reviewer_name.charAt(0)}</div>
        <div className={css.reviewContent}>
          <div className={css.reviewHeader}>
            <h3 className={css.name}>{review.reviewer_name}</h3>
            <div className={css.rating}>
              {[...Array(5)].map((star, index) => {
                return (
                  <svg
                    className={
                      index < review.reviewer_rating
                        ? clsx(css.icon, css.filledStar)
                        : clsx(css.icon, css.emptyStar)
                    }
                    width="16"
                    height="16"
                    aria-label="btn icon"
                    key={index}
                  >
                    <use href={`${sprite}#icon-rating`} />
                  </svg>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <p className={css.reviewText}>{review.comment}</p>
    </div>
  );
}

export default Reviews

