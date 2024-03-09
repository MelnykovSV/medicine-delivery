import styled from "@emotion/styled";

export const Container = styled.li`
  border: 1px solid #2196f3;
  border-radius: 20px;
  width: 100%;
  padding: 20px;
  overflow: hidden;

  &:not(:last-of-type) {
    margin-bottom: 10px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
  }
`;

export const ContentBlock = styled.div`
  width: 50%;
  flex-shrink: 0;
`;

export const ImageThumb = styled.div`
  width: 100%;
  height: 160px;
  margin-bottom: 10px;
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
  margin-bottom: 20px;
`;

export const StyledButton = styled.button`
  padding: 0;
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5px;

  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
    fill: #3d3e3f;
  }

  &.blocked {
    pointer-events: none;
    svg {
      fill: #afb2b5;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  right: 7px;

  transform: translateY(-50%);
`;
export const StyledNumberInput = styled.input`
  height: 45px;
  width: 100px;
  padding-left: 10px;
  padding-right: 22px;
`;

export const InputWrap = styled.div`
  position: relative;
  width: fit-content;
`;

export const RemoveButton = styled.button`
  padding: 0;
  width: 45px;
  height: 45px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5px;

  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
    fill: #3d3e3f;
  }
`;

export const BottomBlock = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
`;
