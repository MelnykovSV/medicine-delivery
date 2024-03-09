import styled from "@emotion/styled";

export const Container = styled.li`
  display: flex;
  flex-direction: column-reverse;
  gap: 10px;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    width: 100%;
    height: 1px;
    background-color: #8b8e91;
  }

  @media screen and (min-width: 768px) {
    &:after {
      bottom: -5px;
    }
    flex-direction: row;
  }
`;

export const OrderInfo = styled.ul`
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: calc((100% - 10px) * 0.58);
  }

  @media screen and (min-width: 1440px) {
    width: calc((100% - 20px) * 2 / 3);
  }
`;

export const CartInfo = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 20px;

  @media screen and (min-width: 768px) {
    width: calc((100% - 10px) * 0.38);
  }

  @media screen and (min-width: 1440px) {
    width: calc((100% - 20px) / 3);
  }
`;

export const Address = styled.p`
  font-weight: 700;
  font-size: 16px;
  min-height: 37px;
  margin-bottom: 6px;
`;

export const RegularInput = styled.p`
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 6px;
`;

export const Price = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 6px;
`;
