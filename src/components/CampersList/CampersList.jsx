import CamperCard from "../../components/CamperCard/CamperCard";
import css from "./CampersList.module.css";

const CampersList = ({ campers }) => {
  return (
    
      <div className={css.list}>
        {campers.map((camper) => (
          <div key={camper._id}>
            <CamperCard camper={camper} />
          </div>
        ))}
      </div>
    
  );
};

export default CampersList;
