

import { useEffect, useState } from "react";
// import { fetchCampers } from "../../redux/campers/operations";
// import CampersList from "../../components/CampersList/CampersList";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";
// import Button from "../../components/Button/Button";
import CamperCard from "../../components/CamperCard/CamperCard";
import Modal from "../../components/Modal/Modal";
import Filters from "../../components/Filters/Filters";
// import { getCampers } from "../../apiService/campers";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(state => state.campers.items);
  const [page, setPage] = useState(1);
  const [modalCamper, setModalCamper] = useState(null);

  useEffect(() => {
    dispatch(fetchCampers({ page, perPage: 4 }))
  }, [dispatch, page]);

  const handleLoadMore = () => { 
    setPage(prevPage => prevPage + 1);
  }

  const handleShowMore = (camper) => {
    setModalCamper(camper);
  }

  const handleCloseModal = () => {
    setModalCamper(null);
  }

  return (
    <div className="catalogContainer">
      <Filters />
      <div>
        <div className="camper-grid">
          {campers.map((camper) => (
            <div key={camper._id}>
              <CamperCard
                camper={camper}
                showMore={handleShowMore}
                onClick={() => handleShowMore(camper)}
              />
              <button onClick={() => handleShowMore(camper)}>Show more</button>
            </div>
          ))}
        </div>
        {status === "loading" && <p>Loading...</p>}
        {status === "succeeded" && (
          <button onClick={handleLoadMore}>Load more</button>
        )}
        {status === "failed" && <p>Error loading campers</p>}
        {modalCamper && (
          <Modal
            isOpen={!!modalCamper}
            onClose={handleCloseModal}
            camper={modalCamper}
          />
        )}
      </div>
    </div>
  );
}

export default CatalogPage

