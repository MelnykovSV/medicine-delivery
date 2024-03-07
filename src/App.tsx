import { lazy } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ModernNormalize } from "emotion-modern-normalize";
import { SharedLayout } from "./components";
import { ErrorBoundary } from "react-error-boundary";
import {ErrorFallback} from "./components";

const ShopPage = lazy(() => import("./pages/Shop/Shop"));
const ShoppingCartPage = lazy(
  () => import("./pages/ShoppingCart/ShoppingCart")
);
const HistoryPage = lazy(() => import("./pages/History/History"));
const CouponsPage = lazy(() => import("./pages/Coupons/Coupons"));



function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={(details) => {}}>
      <div className="App">
        <ModernNormalize />
        <Routes>
          <Route element={<SharedLayout />}>
            <Route path="/" element={<ShopPage />} />
            <Route path="/shoppingCart" element={<ShoppingCartPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/coupons" element={<CouponsPage />} />
            <Route path="*" element={<h1>NOT FOUND!</h1>} />
          </Route>
        </Routes>
      </div>
    </ErrorBoundary>
  );
}

export default App;
