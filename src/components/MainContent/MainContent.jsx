import heroImg from "../../assets/images/hero-bg.jpg";
import css from "./MainContent.module.css";

const MainContent = () => {
    return (
      <div className={css.mainContentWrap}>
        <h1 className={css.title}>Rent a Camper for Unforgettable Journeys</h1>
        <p className={css.mainText}>
          Renting campers offers a unique and comfortable way to explore new
          destinations, providing all the conveniences of home on the road. Our
          modern campers are equipped with essential amenities, including
          kitchen facilities, cozy sleeping areas, and bathrooms. Whether you are
          planning a family vacation or a solo adventure, renting a camper gives
          you the freedom to travel at your own pace. 
        </p>
        <div className={css.mainInfoWrap}>
          <div className={css.howItWork}>
            <h2 className={css.subtitle}>How It Works</h2>
            <div className={css.steps}>
              <div>
                <h3 className={css.stepsItem}>1. Choose a Camper</h3>
                <p className={css.text}>
                  Browse our catalog and choose the camper you like.
                </p>
              </div>
              <div>
                <h3 className={css.stepsItem}>2. Book Online</h3>
                <p className={css.text}>
                  Book the camper through our convenient online service.
                </p>
              </div>
              <div>
                <h3 className={css.stepsItem}>3. Enjoy Your Trip</h3>
                <p className={css.text}>
                  Pick up the camper and enjoy your journey!
                </p>
              </div>
            </div>
          </div>

          <div className={css.heroImgWrap}>
            <img src={heroImg} alt="red camper" width={680} />
          </div>
        </div>
      </div>
    );
};

export default MainContent;
