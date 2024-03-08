import { FavoritesContext } from "../context";
import { ReactElement, useState } from "react";
import { useLocalStorage } from "../hooks";

interface IFavoritesProviderProps {
  children: ReactElement | ReactElement[];
}

export const FavoritesProvider = ({ children }: IFavoritesProviderProps) => {
  const [getItem, setItem] = useLocalStorage();
  const [favorites, setFavorites] = useState<string[]>(
    () => getItem("favorites") || []
  );

  const updateFavorites = (items: string[]) => {
    setItem<string[]>("favorites", items);
    setFavorites(items);
  };
  return (
    <FavoritesContext.Provider value={{ favorites, updateFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};
