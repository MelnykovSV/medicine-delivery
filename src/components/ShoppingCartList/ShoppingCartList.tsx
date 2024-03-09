import * as S from "./ShoppingCartList.styled";
import { useShoppingCart } from "../../hooks";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../api";
import { IMedicineData } from "../../interfaces";
import ShoppingCartListItem from "../ShoppingCartListItem/ShoppingCartListItem";
import { calculateTotalPrice } from "../../helpers";
import { toast } from "react-toastify";
import { getErrorMessage } from "../../helpers";

interface ICartMedicineData extends IMedicineData {
  amount: number;
}

export default function ShoppingCartList() {
  const { shoppingCart } = useShoppingCart();

  const [medicinesMap, setMedicinesMap] = useState<Record<
    string,
    IMedicineData | null
  > | null>(null);

  const generateCartList = (
    shoppingCart: { id: string; amount: number }[],
    medicinesMap: Record<string, IMedicineData | null>
  ) => {
    return shoppingCart.reduce((acc, item) => {
      if (medicinesMap[item.id] === null) {
        return acc;
      }
      return [
        ...acc,
        {
          ...medicinesMap[item.id],
          amount: item.amount,
        } as ICartMedicineData,
      ];
    }, [] as ICartMedicineData[]);
  };

  const requestQuery = shoppingCart.map((item) => item.id).join(",");

  useEffect(() => {
    (async () => {
      if (requestQuery) {
        try {
          const res = await axiosInstance.get(
            `api/medicines/map?id=${requestQuery}`
          );

          const medicinesMap = res.data.data.medicines;
          setMedicinesMap(medicinesMap);
        } catch (error) {
          toast.error(getErrorMessage(error));
        }
      }
    })();
  }, [requestQuery]);

  return (
    <S.Container>
      {shoppingCart && medicinesMap ? (
        <>
          <p>
            Total price:{" "}
            {calculateTotalPrice(
              generateCartList(shoppingCart, medicinesMap)
            ).toFixed(2)}{" "}
            $
          </p>
          <ul>
            {generateCartList(shoppingCart, medicinesMap).map(
              ({
                _id,
                name,
                image,
                price,
                createdAt,
                updatedAt,
                amount,
              }: ICartMedicineData) => (
                <ShoppingCartListItem
                  key={_id}
                  _id={_id}
                  name={name}
                  image={image}
                  price={price}
                  createdAt={createdAt}
                  updatedAt={updatedAt}
                  amount={amount}
                />
              )
            )}
          </ul>
        </>
      ) : null}
    </S.Container>
  );
}
