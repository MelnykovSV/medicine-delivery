import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../../components";

export default function Shop() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={(details) => {}}>
      <div>
        <h1>Shop Page</h1>
      </div>
    </ErrorBoundary>
  );
}
