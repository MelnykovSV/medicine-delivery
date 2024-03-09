import { DNA } from "react-loader-spinner";
import * as S from "./Loader.styled";

export default function Loader() {
  return (
    <S.Container>
      <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </S.Container>
  );
}
