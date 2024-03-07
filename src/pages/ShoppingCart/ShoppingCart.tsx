import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../../components";

export default function ShoppingCart() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={(details) => {}}>
      <div>
        <h1>Shopping Cart Page</h1>
      </div>
    </ErrorBoundary>
  );
}
