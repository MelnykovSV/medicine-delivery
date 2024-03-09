import * as S from "./OrdersHistoryList.styled";
import { IOrderData } from "../../interfaces";
import OrdersHistoryListItem from "../OrdersHistoryListItem/OrdersHistoryListItem";

interface IOrdersHistoryListProps {
  ordersHistory: IOrderData[];
}

export default function OrdersHistoryList({
  ordersHistory,
}: IOrdersHistoryListProps) {
  return (
    <S.Container>
      <ul>
        {ordersHistory.map((item) => (
          <OrdersHistoryListItem key={item._id} order={item} />
        ))}
      </ul>
    </S.Container>
  );
}
