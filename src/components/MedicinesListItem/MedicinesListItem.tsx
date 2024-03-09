import * as S from "./MedicinesListItem.styled";
import { useFavorites, useShoppingCart } from "../../hooks";

interface IMedicinesListItemProps {
  id: string;
  name: string;
  price: number;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export default function MedicinesListItem({
  id,
  name,
  price,
  image,
  createdAt,
  updatedAt,
}: IMedicinesListItemProps) {
  const { favorites, updateFavorites } = useFavorites();
  const { shoppingCart, updateShoppingCart } = useShoppingCart();

  const favoritesHandler = () => {
    if (favorites.includes(id)) {
      updateFavorites(favorites.filter((item) => item !== id));
    } else {
      updateFavorites([...favorites, id]);
    }
  };

  const shoppingCartHandler = () => {
    if (shoppingCart.find((item) => item.id === id)) {
      updateShoppingCart(shoppingCart.filter((item) => item.id !== id));
    } else {
      updateShoppingCart([...shoppingCart, { id, amount: 1 }]);
    }
  };
  return (
    <S.Container>
      <p>{id}</p>
      <p>{name}</p>
      <p>{price}</p>
      <p>{image}</p>
      <p>{createdAt}</p>
      <p>{updatedAt}</p>
      <S.StyledFavoriteButton
        type="button"
        className={`${favorites.includes(id) ? "favorite" : ""}`}
        onClick={favoritesHandler}>
        Add to Favorite
      </S.StyledFavoriteButton>
      <S.StyledShoppingCartButton
        type="button"
        className={`${
          shoppingCart.find((item) => item.id === id) ? "inCart" : ""
        }`}
        onClick={shoppingCartHandler}>
        Add to Cart
      </S.StyledShoppingCartButton>
    </S.Container>
  );
}
