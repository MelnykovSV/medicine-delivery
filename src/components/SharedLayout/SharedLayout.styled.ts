import styled from "@emotion/styled";

export const Wrap = styled.div`
  padding-bottom: 20px;
`;

export const Main = styled.main``;

export const Header = styled.header`
  background-color: #2196f3;
  padding: 30px 0;
`;

export const Container = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  max-width: 480px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;
