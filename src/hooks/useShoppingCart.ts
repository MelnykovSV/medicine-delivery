import { ShoppingCartContext } from "../context";
import { useContext } from "react";

export default function useShoppingCart() {
  const shoppingCartContext = useContext(ShoppingCartContext);
  return shoppingCartContext;
}
