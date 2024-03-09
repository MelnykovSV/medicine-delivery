import styled from "@emotion/styled";

export const Container = styled.div`
  flex-grow: 1;

  & > ul {
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 20px;
    padding: 20px 0;
    list-style: none;

    @media screen and (min-width: 768px) {
      flex-direction: row;
    }

    @media screen and (min-width: 1440px) {
      padding: 20px;
    }
  }
`;
