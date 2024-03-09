import * as S from "./OrdersHistoryListItem.styled";
import { IOrderData } from "../../interfaces";
import dayjs from "dayjs";
import OrderHistoryCartItem from "../OrderHistoryCartItem/OrderHistoryCartItem";
import TruncateMarkup from "react-truncate-markup";
import { Swiper, SwiperSlide } from "swiper/react";

import { useMediaQuery } from "usehooks-ts";

import "swiper/css";

interface IOrdersHistoryListItemProps {
  order: IOrderData;
}
export default function OrdersHistoryListItem({
  order,
}: IOrdersHistoryListItemProps) {
  const {
    createdAt,
    email,
    name,
    phone,
    totalPrice,
    _id,
    address,
    shoppingCart,
  } = order;

  const matches = useMediaQuery("(min-width: 1440px)");
  return (
    <S.Container>
      <S.OrderInfo>
        <Swiper spaceBetween={10} slidesPerView={matches ? 2 : 1}>
          {shoppingCart.map(({ id, amount, price, name, image }) => (
            <SwiperSlide key={id}>
              <OrderHistoryCartItem
                id={id}
                amount={amount}
                price={price}
                name={name}
                image={image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </S.OrderInfo>

      <S.CartInfo>
        <S.RegularInput>Order ID: {_id || "No data"}</S.RegularInput>

        <TruncateMarkup lines={2}>
          <S.Address>{address.addressLine || "No data"}</S.Address>
        </TruncateMarkup>
        <S.RegularInput>
          Date: {dayjs(createdAt).format("DD-MM-YYYY hh:mm") || "No data"}
        </S.RegularInput>
        <S.RegularInput>Email: {email || "No data"}</S.RegularInput>
        <S.RegularInput>Name: {name || "No data"}</S.RegularInput>
        <S.RegularInput>Phone: {phone || "No data"}</S.RegularInput>
        <S.Price>
          Total price: {totalPrice ? `${totalPrice.toFixed(2)} $` : "No data"}
        </S.Price>
      </S.CartInfo>
    </S.Container>
  );
}
