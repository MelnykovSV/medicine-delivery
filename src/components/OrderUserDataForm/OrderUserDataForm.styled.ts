import styled from "@emotion/styled";
import InputMask from "react-input-mask";

export const Container = styled.form`
  width: 100%;
`;

export const ErrorField = styled.span`
  display: block;
  font-size: 14px;
  color: red;
  min-height: 16px;
  margin-bottom: 6px;
`;

export const StyledInput = styled.input`
  display: block;
  margin-bottom: 6px;
  width: 100%;
  height: 36px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 0 !important;
  padding-left: 7px;
  padding-right: 7px;
  font-size: 14px;
`;

export const StyledInputWithMask = styled(InputMask)`
  display: block;
  margin-bottom: 6px;
  width: 100%;
  height: 36px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 0 !important;
  padding-left: 7px;
  padding-right: 7px;
  font-size: 14px;
`;

export const StyledButton = styled.button`
  display: block;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  padding: 15px 20px;
  margin: 0 auto;
  border: none;
  border-radius: 10px;
  color: white;
  background-color: #2196f3;
  transition: background-color 0.3s linear;

  @keyframes ripple {
    0% {
      box-shadow: 0 0 0 0 rgba(34, 104, 245, 0.3),
        0 0 0 1px rgba(34, 104, 245, 0.3), 0 0 0 3px rgba(34, 104, 245, 0.3),
        0 0 0 5px rgba(34, 104, 245, 0.3);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(34, 104, 245, 0.3),
        0 0 0 4px rgba(34, 104, 245, 0.3), 0 0 0 20px rgba(167, 36, 196, 0),
        0 0 0 30px rgba(167, 36, 196, 0);
    }
  }

  &.loading {
    pointer-events: none;
    animation: ripple 1s linear infinite;
    transition: box-shadow 0.7s ease;

    box-shadow: 10px 5px 5px 10px 200, 200;
  }

  &:hover,
  &:focus {
    background-color: #2268f5;
  }
`;
