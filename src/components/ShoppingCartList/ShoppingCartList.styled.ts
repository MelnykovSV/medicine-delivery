import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 760px;
`;

export const StyledList = styled.ul`
  max-height: calc(100% - 59px);
  overflow-y: auto;
  margin: 0;

  gap: 10px;
  padding: 20px;
  list-style: none;
`;

export const TotalPriceStyled = styled.p`
  background-color: #2196f3;
  padding-top: 15px;
  color: white;
  font-size: 25px;
  font-weight: 700;

  padding-bottom: 15px;
`;
