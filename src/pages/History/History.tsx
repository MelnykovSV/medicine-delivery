import {
  ErrorFallback,
  Loader,
  OrdersHistoryList,
  FilterTab,
} from "../../components";
import { ErrorBoundary } from "react-error-boundary";
import { useLocalStorage } from "../../hooks";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { getErrorMessage } from "../../helpers";
import { toast, ToastContainer } from "react-toastify";
import { axiosInstance } from "../../api";
import { IOrderData } from "../../interfaces";
import * as S from "./History.styled";

export default function History() {
  const [emailQuery, setEmailQuery] = useState("");
  const [phoneQuery, setPhoneQuery] = useState("");
  const [orderIdQuery, setOrderIdQuery] = useState("");

  const [getItem, setItem] = useLocalStorage();
  const [userId] = useState(() => {
    const userId = getItem("userId");
    if (!userId) {
      const userId = nanoid();
      setItem("userId", userId);
      return userId;
    }
    return userId;
  });

  const emailQueryHandler = (value: string) => {
    setEmailQuery(value);
  };
  const phoneQueryHandler = (value: string) => {
    setPhoneQuery(value);
  };
  const orderIdQueryHandler = (value: string) => {
    setOrderIdQuery(value);
  };

  const [ordersHistory, setOrdersHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  const filterOrders = (ordersHistory: IOrderData[]) => {
    return ordersHistory
      .filter((item) =>
        orderIdQuery === "" ? true : item._id === orderIdQuery
      )
      .filter((item) => (phoneQuery === "" ? true : item.phone === phoneQuery))
      .filter((item) => (emailQuery === "" ? true : item.email === emailQuery));
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const res = await axiosInstance.get(`api/orders/${userId}`);

        setOrdersHistory(res.data.data);
        setIsLoading(false);
      } catch (error) {
        toast.error(getErrorMessage(error));
        setIsLoading(false);
      }
    })();
  }, [userId]);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={(details) => {}}>
      <div>
        <FilterTab
          emailQueryHandler={emailQueryHandler}
          phoneQueryHandler={phoneQueryHandler}
          orderIdQueryHandler={orderIdQueryHandler}
        />

        {!isLoading ? (
          <>
            {filterOrders(ordersHistory).length ? (
              <OrdersHistoryList ordersHistory={filterOrders(ordersHistory)} />
            ) : (
              <S.Message>No Order History</S.Message>
            )}
          </>
        ) : (
          <Loader />
        )}
        <ToastContainer />
      </div>
    </ErrorBoundary>
  );
}
