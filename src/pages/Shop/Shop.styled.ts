import styled from "@emotion/styled";

export const Container = styled.div``;

export const PageBody = styled.div`
  display: flex;

  flex-direction: column;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;
