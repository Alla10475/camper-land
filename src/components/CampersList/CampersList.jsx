// import CamperCard from "../CamperCard/CamperCard";
import CamperCard from "../../components/CamperCard/CamperCard";
import css from "./CampersList.module.css";

const CampersList = ({ campers }) => {
  return (
    <>
      <div className={css.list}>
        <h2 className={css.title}>Campers for you</h2>
        {campers.map((camper) => (
          <CamperCard key={camper._id} camper={camper} />
        ))}
      </div>
    </>
  );
};

export default CampersList;
