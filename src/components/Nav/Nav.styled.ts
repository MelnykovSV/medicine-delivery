import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Container = styled.nav`
  ul {
    padding: 0;
    list-style: none;
    display: flex;
    gap: 10px;
    margin: 0;
    flex-wrap: wrap;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: white;
  min-width: 65px;
  padding: 10px;
  border: 1px solid white;
  border-radius: 10px;

  transition: background-color 0.3s linear;

  &.active {
    background-color: #1277ca;
    pointer-events: none;
  }
  &:hover,
  &:focus {
    background-color: #2268f5;
  }
`;
