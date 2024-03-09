import { createContext } from "react";

interface IFavoritesContext {
  favorites: string[];
  updateFavorites: (items: string[]) => void;
}

interface IShoppingCartContext {
  shoppingCart: { id: string; amount: number }[];
  updateShoppingCart: (items: { id: string; amount: number }[]) => void;
}

export const FavoritesContext = createContext<IFavoritesContext>({
  favorites: [],
  updateFavorites: () => {},
});

export const ShoppingCartContext = createContext<IShoppingCartContext>({
  shoppingCart: [],
  updateShoppingCart: (items: { id: string; amount: number }[]) => {},
});
