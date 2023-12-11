import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Card, CardContainer } from "./CatalogPage.styled";
import {
  ModalOverlay,
  ModalContent,
} from "../../components/CatalogModal/Modal";

const AdCard = ({ ad, onClick }) => (
  <Card onClick={onClick}>
    <img src={ad.img} alt={ad.make} />
    <h3>
      {ad.make} {ad.model} {ad.rentalPrice}
    </h3>
    <p>Id: {ad.id}</p>
    <p>Year: {ad.year}</p>
    <p>Type: {ad.type}</p>
  </Card>
);

AdCard.propTypes = {
  ad: PropTypes.shape({
    img: PropTypes.string,
    make: PropTypes.string,
    model: PropTypes.string,
    rentalPrice: PropTypes.string,
    id: PropTypes.string,
    year: PropTypes.number,
    type: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

const Catalog = () => {
  const [ads, setAds] = useState([]);
  const [selectedMake, setSelectedMake] = useState(null);
  const [filteredAds, setFilteredAds] = useState([]);
  const [selectedAd, setSelectedAd] = useState(null);

  useEffect(() => {
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

  useEffect(() => {
    let sortedAds = [...ads]; // Copy the original ads array

    if (selectedMake) {
      sortedAds = ads.filter((ad) => ad.make === selectedMake);
    } else {
      sortedAds.sort((a, b) => a.make.localeCompare(b.make)); // Sort by make using localeCompare
    }

    setFilteredAds(sortedAds);
  }, [selectedMake, ads]);

  const handleCardClick = (ad) => {
    setSelectedAd(ad);
  };

  const handleModalClose = () => {
    setSelectedAd(null);
  };

  const handleMakeChange = (e) => {
    setSelectedMake(e.target.value);
  };

  const renderModal = () => {
    if (!selectedAd) return null;

    return (
      <ModalOverlay onClick={handleModalClose}>
        <ModalContent selectedAd={selectedAd} onClose={handleModalClose} />
      </ModalOverlay>
    );
  };

  return (
    <div>
      <h2>Catalog</h2>
      <div>
        <select value={selectedMake} onChange={handleMakeChange}>
          <option value="">All Makes</option>
          <option value="Buick">Buick</option>
          <option value="Volvo">Volvo</option>
          <option value="HUMMER">HUMMER</option>
          <option value="Subaru">Subaru</option>
          <option value="Mitsubishi">Mitsubishi</option>
          <option value="Nissan">Nissan</option>
          <option value="Lincoln">Lincoln</option>
          <option value="GMC">GMC</option>
          <option value="Hyundai">Hyundai</option>
          <option value="MINI">MINI</option>
          <option value="Bentley">Bentley</option>
          <option value="Mercedes-Benz">Mercedes-Benz</option>
          <option value="Aston Martin">Aston Martin</option>
          <option value="Pontiac">Pontiac</option>
          <option value="Lamborghini">Lamborghini</option>
          <option value="Audi">Audi</option>
          <option value="BMW">BMW</option>
          <option value="Chevrolet">Chevrolet</option>
          <option value="Chrysler">Chrysler</option>
          <option value="Kia">Kia</option>
          <option value="Land">Land</option>
          {/* Remaining options */}
        </select>
      </div>
      <CardContainer>
        {filteredAds.length > 0 ? (
          filteredAds.map((ad) => (
            <AdCard key={ad.id} ad={ad} onClick={() => handleCardClick(ad)} />
          ))
        ) : (
          <p>No cars found for the selected make.</p>
        )}
      </CardContainer>
      {renderModal()}
    </div>
  );
};

export default Catalog;
