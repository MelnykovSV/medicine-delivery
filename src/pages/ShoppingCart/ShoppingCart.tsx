import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../../components";
import { useLocalStorage } from "../../hooks";
import { nanoid } from "nanoid";
import { useEffect } from "react";

export default function ShoppingCart() {
  const [getItem, setItem] = useLocalStorage();
  useEffect(() => {
    console.log("local storage");
    const userId = getItem("userId");
    if (!userId) {
      setItem("userId", nanoid());
    }
  }, [getItem, setItem]);
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={(details) => {}}>
      <div>
        <h1>Shopping Cart Page</h1>
      </div>
    </ErrorBoundary>
  );
}
