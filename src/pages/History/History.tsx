import { ErrorFallback } from "../../components";
import { ErrorBoundary } from "react-error-boundary";
import { useLocalStorage } from "../../hooks";
import { nanoid } from "nanoid";
import { useEffect } from "react";

export default function History() {
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
        <h1>History Page</h1>
      </div>
    </ErrorBoundary>
  );
}
