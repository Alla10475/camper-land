import Reviews from "../Reviews/Reviews";
import css from "./ReviewsList.module.css";

const ReviewsList = ({reviews}) => {
  <div className={css.list}>
    {reviews.map((review, index) => (
      <Reviews key={index} review={review} />
    ))}
  </div>;
};

export default ReviewsList;
