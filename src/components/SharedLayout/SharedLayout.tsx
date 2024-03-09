import * as S from "./SharedLayout.styled";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import Loader from "../Loader/Loader";

export default function SharedLayout() {
  return (
    <S.Wrap>
      <div>
        <S.Header>
          <S.Container>
            <Nav />
          </S.Container>
        </S.Header>
        <S.Main>
          <S.Container>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </S.Container>
        </S.Main>
      </div>
    </S.Wrap>
  );
}
