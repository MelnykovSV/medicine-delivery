import { IMedicineData } from "../../interfaces";
import * as S from "./ShoppingCartListItem.styled";
import { useShoppingCart } from "../../hooks";
import placeholderImage from "../../images/placeholder-image.jpg";
import TruncateMarkup from "react-truncate-markup";
import dayjs from "dayjs";
import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc";
import { FaTrashAlt } from "react-icons/fa";

interface ICartMedicineData extends IMedicineData {
  amount: number;
}

export default function ShoppingCartListItem({
  _id,
  name,
  image,
  price,
  createdAt,
  updatedAt,
  amount,
}: ICartMedicineData) {
  const { shoppingCart, updateShoppingCart } = useShoppingCart();

  const inputChangeHandler = (e: any) => {
    if (Number(e.target.value)) {
      updateShoppingCart(
        shoppingCart.map((item) =>
          item.id === _id ? { id: _id, amount: Number(e.target.value) } : item
        )
      );
    }
  };

  const incrementCartItemHandler = () => {
    updateShoppingCart(
      shoppingCart.map((item) =>
        item.id === _id ? { id: _id, amount: amount + 1 } : item
      )
    );
  };

  const decrementCartItemHandler = () => {
    if (amount > 1) {
      updateShoppingCart(
        shoppingCart.map((item) =>
          item.id === _id ? { id: _id, amount: amount - 1 } : item
        )
      );
    }
  };

  const removeFromCartHandler = () => {
    updateShoppingCart(shoppingCart.filter((item) => item.id !== _id));
  };

  return (
    <S.Container>
      <S.ImageThumb>
        <img src={image || placeholderImage} alt={name} />
      </S.ImageThumb>
      <div>
        <TruncateMarkup lines={2}>
          <S.Name>{name || "No data"} </S.Name>
        </TruncateMarkup>
        <S.Price>Price: {price ? `${price} $` : "No data"} </S.Price>
        <S.Date>
          Date added: {dayjs(createdAt).format("DD/MM/YYYY HH:mm") || "No data"}
        </S.Date>

        <S.BottomBlock>
          <S.InputWrap>
            <S.StyledNumberInput
              type="text"
              pattern="[0-9]+"
              value={amount}
              onChange={inputChangeHandler}
            />

            <S.ButtonsContainer>
              <S.StyledButton type="button" onClick={incrementCartItemHandler}>
                <VscTriangleUp />
              </S.StyledButton>
              <S.StyledButton
                type="button"
                onClick={decrementCartItemHandler}
                disabled={amount <= 1}
                className={amount <= 1 ? "blocked" : ""}>
                <VscTriangleDown />
              </S.StyledButton>
            </S.ButtonsContainer>
          </S.InputWrap>
          <S.RemoveButton type="button" onClick={removeFromCartHandler}>
            <FaTrashAlt />
          </S.RemoveButton>
        </S.BottomBlock>
      </div>
    </S.Container>
  );
}
