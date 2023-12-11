import styled from "styled-components";
import PropTypes from "prop-types";

const StyledModalOverlay = styled.div`
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

const StyledModalContent = styled.div`
  width: 541px;
  height: 752px;
  background-color: #fff;
  overflow: hidden;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* add other styles */

  img {
    width: 469px;
    height: 314px;
    object-fit: cover;
    overflow: hidden;
  }

  /* existing styles */

  .modal-info {
    margin: 16px;
    color: black;
    /* add other styles */
  }

  h3 {
    /* add styles */
  }
  p {
    margin-bottom: 4px;
    font-size: 14px;
  }

  .modal-accessories,
  .modal-functionalities {
    font-size: 12px;
    margin-top: 8px;
  }

  .modal-rental-conditions {
    margin-top: 8px;
    font-weight: bold;
  }

  .modal-button {
    margin-top: 16px;
    padding: 8px 16px;
    font-size: 14px;
  }
`;

const StyledModalImage = styled.img`
  width: 469px;
  height: 314px;
  object-fit: cover;
  overflow: hidden;
`;
const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

const ModalOverlay = ({ children, onClick }) => (
  <StyledModalOverlay onClick={onClick}>{children}</StyledModalOverlay>
);

ModalOverlay.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

const ModalContent = ({ selectedAd, onClose }) => {
  if (!selectedAd) return null;

  const {
    make,
    model,
    year,
    address,
    id,
    type,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    functionalities,
    rentalConditions,
  } = selectedAd;

  return (
    <StyledModalContent>
      <StyledModalImage src={selectedAd.img} alt={make} />
      <div className="modal-info">
        <h3>
          {make} {model} - Year: {year}
        </h3>
        <p>Address: {address}</p>
        <p>Id: {id}</p>
        <p>Type: {type}</p>
        <p>Fuel Consumption: {fuelConsumption}</p>
        <p>Engine Size: {engineSize}</p>
        <p>Description: {description}</p>
        <p className="modal-accessories">
          Accessories: {accessories.join(", ")}
        </p>
        <p className="modal-functionalities">
          Functionalities: {functionalities.join(", ")}
        </p>
        <p className="modal-rental-conditions">Rental Conditions:</p>
        <p>{rentalConditions}</p>
        <button className="modal-button" onClick={onClose}>
          Rental Car
        </button>
      </div>
      <CloseButton className="modal-close-button" onClick={onClose} />
    </StyledModalContent>
  );
};

ModalContent.propTypes = {
  selectedAd: PropTypes.shape({
    img: PropTypes.string,
    make: PropTypes.string,
    model: PropTypes.string,
    year: PropTypes.number,
    address: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.string,
    fuelConsumption: PropTypes.string,
    engineSize: PropTypes.string,
    description: PropTypes.string,
    accessories: PropTypes.arrayOf(PropTypes.string),
    functionalities: PropTypes.arrayOf(PropTypes.string),
    rentalConditions: PropTypes.string,
  }),
  onClose: PropTypes.func,
};
export { ModalOverlay, ModalContent };
