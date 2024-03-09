import * as S from "./MedicinesListItem.styled";
import { useFavorites, useShoppingCart } from "../../hooks";
import dayjs from "dayjs";
import TruncateMarkup from "react-truncate-markup";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import placeholderImage from "../../images/placeholder-image.jpg";

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
      <S.ImageThumb>
        <img src={image || placeholderImage} alt={name} />
      </S.ImageThumb>
      <TruncateMarkup lines={2}>
        <S.Name>{name || "No data"} </S.Name>
      </TruncateMarkup>

      <S.Price>Price: {price ? `${price} $` : "No data"} </S.Price>
      <S.Date>
        Date added: {dayjs(createdAt).format("DD/MM/YYYY HH:mm") || "No data"}
      </S.Date>
      <S.ButtonContainer>
        <S.StyledFavoriteButton
          type="button"
          className={`${favorites.includes(id) ? "favorite" : ""}`}
          onClick={favoritesHandler}>
          <FaHeart />
        </S.StyledFavoriteButton>
        <S.StyledShoppingCartButton
          type="button"
          className={`${
            shoppingCart.find((item) => item.id === id) ? "inCart" : ""
          }`}
          onClick={shoppingCartHandler}>
          <FaCartPlus />
        </S.StyledShoppingCartButton>
      </S.ButtonContainer>
    </S.Container>
  );
}
