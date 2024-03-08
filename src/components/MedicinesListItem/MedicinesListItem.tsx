import * as S from "./MedicinesListItem.styled";
import { useFavorites } from "../../hooks";

interface IMedicinesListItemProps {
  id: string;
  name: string;
  price: number;
  image: string;
  createdAt: Date;
  updatedAt: Date;
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

  const favoritesHandler = () => {
    if (favorites.includes(id)) {
      updateFavorites(favorites.filter((item) => item !== id));
    } else {
      updateFavorites([...favorites, id]);
    }
  };

  const cartHandler = () => {};
  return (
    <S.Container>
      <p>{id}</p>
      <p>{name}</p>
      <p>{price}</p>
      <p>{image}</p>
      <p>{createdAt.toString()}</p>
      <p>{updatedAt.toString()}</p>
      <S.StyledFavoriteButton
        type="button"
        className={`${favorites.includes(id) ? "favorite" : ""}`}
        onClick={favoritesHandler}>
        Add to Favorite
      </S.StyledFavoriteButton>
      <button type="button">Add to Cart</button>
    </S.Container>
  );
}
