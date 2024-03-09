import { IMedicineData } from "../../interfaces";
import * as S from "./ShoppingCartListItem.styled";
import { useShoppingCart } from "../../hooks";

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
      <p>{name}</p>
      <p>{image}</p>
      <p>{price}</p>
      <p>{_id}</p>

      <p>{createdAt}</p>
      <p>{updatedAt}</p>
      <div>
        <button type="button" onClick={incrementCartItemHandler}>
          Increment
        </button>
        <S.StyledNumberInput
          type="text"
          pattern="[0-9]+"
          value={amount}
          onChange={inputChangeHandler}
        />
        <button
          type="button"
          onClick={decrementCartItemHandler}
          disabled={amount <= 1}>
          Decrement
        </button>
        <p>{amount}</p>
        <button type="button" onClick={removeFromCartHandler}>
          Remove from cart
        </button>
      </div>
    </S.Container>
  );
}
