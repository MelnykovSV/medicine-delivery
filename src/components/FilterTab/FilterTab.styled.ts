import styled from "@emotion/styled";
import InputMask from "react-input-mask";

export const Container = styled.div``;

export const StyledInputWithMask = styled(InputMask)`
  display: block;
  margin: 0 auto 6px auto;
  width: 100%;
  max-width: 500px;
  height: 36px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 0 !important;
  padding-left: 7px;
  padding-right: 7px;
  font-size: 14px;
`;

export const StyledInput = styled.input`
  display: block;
  margin: 0 auto 6px auto;
  width: 100%;
  max-width: 500px;
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
  width: 150px;
  padding: 15px 20px;
  margin: 0 auto;
  border: none;
  border-radius: 10px;
  color: white;
  background-color: #2196f3;
  transition: background-color 0.3s linear;

  &:hover,
  &:focus {
    background-color: #2268f5;
  }
`;
