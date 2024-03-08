import * as S from "./PharmaciesSideBar.styled";
import { IPharmacieData } from "../../interfaces";

interface IPharmaciesSideBarProps {
  pharmacies: IPharmacieData[];
  pharmacyPickHandler: (id: string) => void;
}

export default function PharmaciesSideBar({
  pharmacies,
  pharmacyPickHandler,
}: IPharmaciesSideBarProps) {
  return (
    <S.Container>
      <ul>
        {pharmacies.map((item) => (
          <button
            key={item._id}
            type="button"
            onClick={() => {
              pharmacyPickHandler(item._id);
            }}>
            {item.name}
          </button>
        ))}
      </ul>
    </S.Container>
  );
}
