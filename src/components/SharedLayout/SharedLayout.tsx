import * as S from "./SharedLayout.styled";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";

export default function SharedLayout() {
  return (
    <S.Container>
      <S.Header>
        <Nav />
      </S.Header>
      <S.Main>
        <Suspense fallback={"======LOADING...======"}>
          <Outlet />
        </Suspense>
      </S.Main>
    </S.Container>
  );
}
