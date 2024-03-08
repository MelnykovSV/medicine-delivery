import { FavoritesContext } from "../context";

import { useContext } from "react";

export default function useFavorites() {
  const favoritesContext = useContext(FavoritesContext);
  return favoritesContext;
}
