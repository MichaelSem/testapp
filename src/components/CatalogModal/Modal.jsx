import {
  StyledModalContent,
  StyledModalImage,
  StyledModalOverlay,
  CloseButton,
} from "./Modal.styled";
import PropTypes from "prop-types";

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
