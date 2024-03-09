import * as S from "./OrderHistoryCartItem.styled";
import placeholderImage from "../../images/placeholder-image.jpg";
import TruncateMarkup from "react-truncate-markup";

interface IOrderHistoryCartItemProps {
  id: string;
  amount: number;
  price: number;
  name: string;
  image: string;
}

export default function OrderHistoryCartItem({
  amount,
  price,
  name,
  image,
}: IOrderHistoryCartItemProps) {
  return (
    <S.Container>
      <S.ImageThumb>
        <img src={image || placeholderImage} alt={`${name} `} />
      </S.ImageThumb>
      <S.InfoBlock>
        <TruncateMarkup lines={2}>
          <S.Name>{name || "No data"}</S.Name>
        </TruncateMarkup>

        <S.Price>Price: {price ? `${price} $` : "No data"}</S.Price>
        <S.Amount>Amount: {amount || "No data"}</S.Amount>
      </S.InfoBlock>
    </S.Container>
  );
}
