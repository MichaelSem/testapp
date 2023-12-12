import styled from "styled-components";

export const StyledModalOverlay = styled.div`
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

export const StyledModalContent = styled.div`
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
    margin-top: 20px;
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

export const StyledModalImage = styled.img`
  width: 469px;
  height: 314px;
  object-fit: cover;
  overflow: hidden;
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;
