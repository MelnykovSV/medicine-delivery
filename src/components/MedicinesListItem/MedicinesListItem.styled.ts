import styled from "@emotion/styled";

export const Container = styled.li`
  border: 1px solid #2196f3;
  border-radius: 20px;
  width: 100%;

  padding: 20px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: calc((100% - 20px) / 2);
  }

  @media screen and (min-width: 1440px) {
    width: calc((100% - 40px) / 3);
  }
`;

export const ImageThumb = styled.div`
  width: 100%;
  height: 180px;
  margin-bottom: 10px;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 18px;
  height: 42px;
  margin-bottom: 8px;
`;

export const Price = styled.p`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 8px;
`;

export const Date = styled.p`
  font-weight: 400;
  font-size: 15px;
  margin-bottom: 8px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;
export const StyledFavoriteButton = styled.button`
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5px;

  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
    fill: #5f6162;
  }
  &.favorite > svg {
    fill: #a620cf;
  }
`;

export const StyledShoppingCartButton = styled.button`
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5px;

  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
    fill: #5f6162;
  }
  &.inCart > svg {
    fill: #17b27c;
  }
`;
