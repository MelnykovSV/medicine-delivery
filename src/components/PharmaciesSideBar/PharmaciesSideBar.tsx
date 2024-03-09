import * as S from "./PharmaciesSideBar.styled";
import { IPharmacieData } from "../../interfaces";

interface IPharmaciesSideBarProps {
  pharmacies: IPharmacieData[];
  pharmacyPickHandler: (id: string) => void;
  currentPharmacyId: string;
}

export default function PharmaciesSideBar({
  pharmacies,
  pharmacyPickHandler,
  currentPharmacyId,
}: IPharmaciesSideBarProps) {
  return (
    <S.Container>
      <ul>
        {pharmacies.map((item) => (
          <S.StyledButton
            key={item._id}
            type="button"
            className={currentPharmacyId === item._id ? "active" : ""}
            onClick={() => {
              pharmacyPickHandler(item._id);
            }}>
            {item.name}
          </S.StyledButton>
        ))}
      </ul>
    </S.Container>
  );
}
