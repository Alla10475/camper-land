import CampersList from "../../components/CampersList/CampersList";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/campers/selectors";
// import Message from "../../components/Message/Message";
// import { useNavigate } from "react-router-dom";

export const FavoritesPage = () => {
  const campers = useSelector(selectFavorites);
  // const navigate = useNavigate();
  return (
    <CampersList campers={campers} />
  )
}

export default FavoritesPage;
