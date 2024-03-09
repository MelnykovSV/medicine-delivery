import { ErrorBoundary } from "react-error-boundary";
import {
  ErrorFallback,
  ShoppingCartList,
  OrderUserDataForm,
} from "../../components";
import { useLocalStorage } from "../../hooks";
import { nanoid } from "nanoid";
import { useEffect } from "react";
import { ShoppingCartProvider } from "../../contextProviders";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

export default function ShoppingCart() {
  const [getItem, setItem] = useLocalStorage();
  useEffect(() => {
    const userId = getItem("userId");
    if (!userId) {
      setItem("userId", nanoid());
    }
  }, [getItem, setItem]);
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={(details) => {}}>
      <ShoppingCartProvider>
        <div>
          <h1>Shopping Cart Page</h1>
        </div>
        <OrderUserDataForm />
        <ShoppingCartList />
      </ShoppingCartProvider>
      <ToastContainer />
    </ErrorBoundary>
  );
}
