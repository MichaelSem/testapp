import { useState, useEffect } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Card = styled.div`
  width: 22%;
  padding: 16px;
  margin-bottom: 50px;
  margin-right: 29px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    margin-bottom: 8px;
  }

  h3 {
    margin-bottom: 8px;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  width: 461px;
  height: 248px;
  background-color: #fff;
  overflow: hidden;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    overflow: hidden;
  }

  .modal-info {
    margin: 16px;
  }

  h3 {
    margin-bottom: 8px;
  }

  p {
    margin-bottom: 4px;
    font-size: 14px;
  }

  .modal-accessories,
  .modal-functionalities {
    font-size: 12px;
  }
`;

const Catalog = () => {
  const [ads, setAds] = useState([]);
  const [selectedAd, setSelectedAd] = useState(null);

  useEffect(() => {
    // Fetch the ads data from the mock API and set it using setAds
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://6573c5a1f941bda3f2af2023.mockapi.io/advert/advert"
        );
        const data = await response.json();
        setAds(data);
      } catch (error) {
        console.error("Error fetching ads:", error);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (ad) => {
    setSelectedAd(ad);
  };

  const handleModalClose = () => {
    setSelectedAd(null);
  };

  const renderModal = () => {
    if (!selectedAd) return null;

    return (
      <ModalOverlay onClick={handleModalClose}>
        <ModalContent>
          <img src={selectedAd.img} alt={selectedAd.make} />
          <div className="modal-info">
            <h3>
              {selectedAd.make} {selectedAd.model} - {selectedAd.year}
            </h3>
            <p>Address: {selectedAd.address}</p>
            <p>Id: {selectedAd.id}</p>
            <p>Year: {selectedAd.year}</p>
            <p>Type: {selectedAd.type}</p>
            <p>Fuel Consumption: {selectedAd.fuelConsumption}</p>
            <p>Engine Size: {selectedAd.engineSize}</p>
            <p>Description: {selectedAd.description}</p>
            <p>Accessories: {selectedAd.accessories.join(", ")}</p>
            <p>Functionalities: {selectedAd.functionalities.join(", ")}</p>
            <p>Rental Conditions:</p>
            <p>{selectedAd.rentalConditions}</p>
            <button className="modal-button">Rental Car</button>
          </div>
        </ModalContent>
      </ModalOverlay>
    );
  };

  // Implement the sorting functionality for the catalog here

  return (
    <div>
      <h2>Catalog</h2>
      <CardContainer>
        {ads.map((ad) => (
          <Card key={ad.id} onClick={() => handleCardClick(ad)}>
            <img src={ad.img} alt={ad.make} />
            <h3>
              {ad.make} {ad.model} {ad.rentalPrice}
            </h3>
            <p>Id: {ad.id}</p>
            <p>Year: {ad.year}</p>
            <p>Type: {ad.type}</p>
          </Card>
        ))}
      </CardContainer>
      {renderModal()}
    </div>
  );
};

export default Catalog;
