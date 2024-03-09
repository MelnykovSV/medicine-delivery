import { ShoppingCartContext } from "../context";
import { ReactElement, useState } from "react";
import { useLocalStorage } from "../hooks";

interface IShoppingCartProviderProps {
  children: ReactElement | ReactElement[];
}

export default function ShoppingCartProvider({
  children,
}: IShoppingCartProviderProps) {
  const [getItem, setItem] = useLocalStorage();
  const [shoppingCart, setShoppingCart] = useState<
    { id: string; amount: number }[]
  >(() => getItem("shoppingCart") || []);

  const updateShoppingCart = (items: { id: string; amount: number }[]) => {
    setItem<{ id: string; amount: number }[]>("shoppingCart", items);
    setShoppingCart(items);
  };

  return (
    <ShoppingCartContext.Provider value={{ shoppingCart, updateShoppingCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
