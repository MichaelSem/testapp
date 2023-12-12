import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios"; // import Axios

import {
  Card,
  CardContainer,
  CardImage,
  Container,
} from "./CatalogPage.styled";
import {
  ModalOverlay,
  ModalContent,
} from "../../components/CatalogModal/Modal";

const AdCard = ({ ad, onClick, onLearnMoreClick }) => {
  const handleLearnMoreClick = (e) => {
    e.stopPropagation();
    onLearnMoreClick(e, ad);
  };

  return (
    <Card onClick={onClick}>
      <CardImage>
        <img src={ad.img} alt={ad.make} />
      </CardImage>

      <h3>
        {ad.make} {ad.model} {ad.rentalPrice}
      </h3>
      <p>Id: {ad.id}</p>
      <p>Year: {ad.year}</p>
      <p>Type: {ad.type}</p>

      <button onClick={handleLearnMoreClick}>Learn More</button>
    </Card>
  );
};

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
  onLearnMoreClick: PropTypes.func.isRequired,
};

const Catalog = () => {
  const [ads, setAds] = useState([]);
  const [selectedMake, setSelectedMake] = useState(null);
  const [filteredAds, setFilteredAds] = useState([]);
  const [selectedAd, setSelectedAd] = useState(null);
  const [makes, setMakes] = useState([]);
  const [loadedAds, setLoadedAds] = useState(12); // Initial value is 12

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://6573c5a1f941bda3f2af2023.mockapi.io/advert/advert`
        );
        setAds(response.data);
        const uniqueMakes = [...new Set(response.data.map((ad) => ad.make))];
        setMakes(uniqueMakes);
      } catch (error) {
        console.error("Error fetching ads:", error);
      }
    };

    fetchData();
  }, [selectedMake, loadedAds]);

  useEffect(() => {
    let sortedAds = [...ads]; // Copy the original ads array

    if (selectedMake) {
      sortedAds = sortedAds.filter((ad) => ad.make === selectedMake);
    }

    sortedAds.sort((a, b) => {
      // Sort by make
      if (a.make < b.make) {
        return -1;
      }
      if (a.make > b.make) {
        return 1;
      }

      // If make is the same, sort by rental price
      return parseInt(a.rentalPrice) - parseInt(b.rentalPrice);
    });

    setFilteredAds(sortedAds);
  }, [selectedMake, ads]);

  const handleCardClick = (ad, e) => {
    if (e.target.tagName.toLowerCase() !== "button") {
      if (!e.target.closest("button")) {
        setSelectedAd(ad);
      }
    }
  };

  const handleLearnMoreClick = (e, ad) => {
    e.stopPropagation(); // Prevent click on the card itself
    setSelectedAd(ad);
  };

  const handleLoadMore = () => {
    setLoadedAds((prevLoadedAds) => prevLoadedAds + 12); // Increase the number of loaded ads by 12
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
    <Container>
      <h2>Catalog</h2>
      <div>
        <select value={selectedMake} onChange={handleMakeChange}>
          <option value="">All Makes</option>
          {makes.map((make) => (
            <option key={make} value={make}>
              {make}
            </option>
          ))}
        </select>
      </div>
      <CardContainer>
        {filteredAds.slice(0, loadedAds).map((ad) => (
          <AdCard
            key={ad.id}
            ad={ad}
            onClick={(e) => handleCardClick(ad, e)}
            onLearnMoreClick={handleLearnMoreClick}
          />
        ))}
      </CardContainer>
      <button onClick={handleLoadMore}>Load More</button>
      {renderModal()}
    </Container>
  );
};

export default Catalog;
