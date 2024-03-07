import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../../components";

export default function Coupons() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={(details) => {}}>
      <div>
        <h1>Coupons Page</h1>
      </div>
    </ErrorBoundary>
  );
}
