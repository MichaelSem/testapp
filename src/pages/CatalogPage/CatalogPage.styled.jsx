import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 29px 50px;
`;

export const Card = styled.div`
  width: 274px;
  padding: 16px;
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
