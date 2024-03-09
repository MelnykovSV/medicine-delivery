import styled from "@emotion/styled";

export const Container = styled.li`
  border: 1px solid #2196f3;
  border-radius: 20px;
  width: 100%;
  padding: 10px;
  overflow: hidden;
  display: flex;

  &:not(:last-of-type) {
    margin-bottom: 10px;
  }
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    width: 434px;
  }
`;

export const ImageThumb = styled.div`
  width: 50%;
  height: 160px;
  flex-grow: 0;

  @media screen and (min-width: 1440px) {
    width: 50%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const InfoBlock = styled.div`
  width: 50%;
  padding-top: 20px;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 18px;
  min-height: 42px;
  margin-bottom: 8px;
`;

export const Price = styled.p`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 20px;
`;

export const Amount = styled.p`
  font-weight: 600;
  font-size: 16px;
`;
