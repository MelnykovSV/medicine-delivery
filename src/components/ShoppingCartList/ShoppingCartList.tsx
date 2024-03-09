import * as S from "./ShoppingCartList.styled";
import { useShoppingCart } from "../../hooks";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../api";
import { IMedicineData } from "../../interfaces";
import ShoppingCartListItem from "../ShoppingCartListItem/ShoppingCartListItem";
import { calculateTotalPrice } from "../../helpers";
import { toast } from "react-toastify";
import { getErrorMessage } from "../../helpers";
import Loader from "../Loader/Loader";

interface ICartMedicineData extends IMedicineData {
  amount: number;
}

export default function ShoppingCartList() {
  const { shoppingCart } = useShoppingCart();
  const [isLoading, setisLoading] = useState(false);

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

  useEffect(() => {
    if (
      shoppingCart.filter((item) => medicinesMap && !!medicinesMap[item.id])
        .length === shoppingCart.length
    ) {
      return;
    }
    const requestQuery = shoppingCart.map((item) => item.id).join(",");

    (async () => {
      if (requestQuery) {
        setisLoading(true);
        try {
          const res = await axiosInstance.get(
            `api/medicines/map?id=${requestQuery}`
          );

          const medicinesMap = res.data.data.medicines;
          setMedicinesMap(medicinesMap);
          setisLoading(false);
        } catch (error) {
          toast.error(getErrorMessage(error));
          setisLoading(false);
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shoppingCart]);

  return (
    <S.Container>
      {!isLoading ? (
        <>
          {medicinesMap ? (
            <>
              <S.StyledList>
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
              </S.StyledList>
              <S.TotalPriceStyled>
                Total price:{" "}
                {calculateTotalPrice(
                  generateCartList(shoppingCart, medicinesMap)
                ).toFixed(2)}{" "}
                $
              </S.TotalPriceStyled>
            </>
          ) : null}
        </>
      ) : (
        <Loader />
      )}
    </S.Container>
  );
}
