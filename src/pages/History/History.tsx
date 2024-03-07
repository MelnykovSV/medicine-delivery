import { ErrorFallback } from "../../components";
import { ErrorBoundary } from "react-error-boundary";

export default function History() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={(details) => {}}>
    <div>
      <h1>History Page</h1>
    </div>
  </ErrorBoundary>
  );
}
