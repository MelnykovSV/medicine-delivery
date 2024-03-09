import styled from "@emotion/styled";

export const Container = styled.aside`
  ul {
    padding: 20px 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  @media screen and (min-width: 1440px) {
    width: 260px;
    min-width: 260px;

    ul {
      flex-direction: column;
    }
  }
`;

export const StyledButton = styled.button`
  display: block;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  border: none;

  transition: background-color 0.3s linear, color 0.3s linear;

  &.active {
    pointer-events: none;
    color: white;
    background-color: #1277ca;
  }

  &:hover,
  &:focus {
    color: white;
    background-color: #2268f5;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 15px;
    padding-bottom: 15px;
  }
`;
