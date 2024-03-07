import * as S from "./Nav.styled";

export default function Nav() {
  return (
    <S.Container>
      <ul>
        <li>
          <S.StyledNavLink to="/">Shop</S.StyledNavLink>
        </li>
        <li>
          <S.StyledNavLink to="/shoppingCart">Shopping Cart</S.StyledNavLink>
        </li>
        <li>
          <S.StyledNavLink to="/history">History</S.StyledNavLink>
        </li>
        <li>
          <S.StyledNavLink to="/coupons">Coupons</S.StyledNavLink>
        </li>
      </ul>
    </S.Container>
  );
}
