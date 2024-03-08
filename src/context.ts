import { createContext } from "react";

interface IFavoritesContext {
  favorites: string[];
  updateFavorites: (items: string[]) => void;
}

export const FavoritesContext = createContext<IFavoritesContext>({
  favorites: [],
  updateFavorites: () => {},
});

export const CartContext = createContext(null);
