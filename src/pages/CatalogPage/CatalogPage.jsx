import { useSelector } from "react-redux";
import Filters from "../../components/Filters/Filters";
import CampersList from "../../components/CampersList/CampersList";

const CatalogPage = () => {
  const campers = useSelector(state => state.campers.items);

  return (
    <div className="catalogContainer">
      <Filters />
      <CampersList campers={campers}/>
      
    </div>
  );
}

export default CatalogPage

