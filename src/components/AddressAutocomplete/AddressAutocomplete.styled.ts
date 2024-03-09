import styled from "@emotion/styled";

export const Container = styled.div`
  margin-bottom: 6px;
  input {
    width: 100%;
    &:focus {
      border: 1px solid black;
      border-radius: 3px;
      box-shadow: 0 0 0 1px black;
    }
  }
`;
