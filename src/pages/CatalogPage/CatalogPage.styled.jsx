import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardContainer = styled.div`
  width: 75%;
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

  h3 {
    margin-bottom: 8px;
  }
`;

export const CardImage = styled.div`
  display: flex;
  justify-content: center;
  width: 274px;
  height: 268px;
  overflow: hidden;
  background-color: rgba(230, 230, 230, 0.5);
`;
