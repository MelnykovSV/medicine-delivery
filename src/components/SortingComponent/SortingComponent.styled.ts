import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 20px;
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledSortingButton = styled.button`
  display: block;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &.active {
    svg {
      fill: #1277ca;
    }
  }
`;
