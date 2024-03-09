import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding-top: 20px;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
