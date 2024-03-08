import { CartContext } from "../context";
import { useState } from "react";

export default function CartProvider() {
  // const []
  return (
    <CartContext.Provider value={null}>
      FETCHING MEDICINES...
    </CartContext.Provider>
  );
}
