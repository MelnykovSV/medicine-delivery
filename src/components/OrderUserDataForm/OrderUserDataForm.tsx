import * as S from "./OrderUserDataForm.styled";
import AddressAutocomplete from "../AddressAutocomplete/AddressAutocomplete";
import { useState } from "react";
import { Address } from "../../interfaces";
import Map from "../Map/Map";
import InputMask from "react-input-mask";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { userFormValidation } from "../../validation";
import { useLocalStorage } from "../../hooks";
import { nanoid } from "nanoid";
import { useShoppingCart } from "../../hooks";
import { axiosInstance } from "../../api";
import { toast } from "react-toastify";
import { getErrorMessage } from "../../helpers";

interface UserFormValues {
  name: string;
  email: string;
  phone: string;
}

export default function OrderUserDataForm() {
  const [address, setAddress] = useState<{
    addressLine: string;
    lat: number;
    lon: number;
  } | null>(null);

  const [addressError, setAddressError] = useState(false);
  const [getItem, setItem] = useLocalStorage();
  const { shoppingCart, updateShoppingCart } = useShoppingCart();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<UserFormValues>({
    resolver: yupResolver(userFormValidation),
  });

  const addressHandler = (address: Address) => {
    if (address) {
      setAddressError(false);
    }
    setAddress(address);
  };

  const onSubmit = async (data: UserFormValues) => {
    const localStorageIdValue = getItem("userId");
    if (localStorageIdValue) {
      try {
        await axiosInstance.post("api/orders/1", {
          ...data,
          address,
          userId: localStorageIdValue,
          shoppingCart,
        });
        setAddress(null);
        setValue("email", "");
        setValue("phone", "");
        setValue("name", "");
        updateShoppingCart([]);
        toast.success("Order created");
      } catch (error) {
        toast.error(getErrorMessage(error));
      }
    } else {
      const userId = nanoid();
      setItem("userId", userId);

      try {
        await axiosInstance.post("api/orders/1", {
          ...data,
          address,
          userId,
          shoppingCart,
        });
        setAddress(null);
        setValue("email", "");
        setValue("phone", "");
        setValue("name", "");
        updateShoppingCart([]);
        toast.success("Order created");
      } catch (error) {
        toast.error(getErrorMessage(error));
      }
    }
  };
  return (
    <S.Container
      onSubmit={(e) => {
        e.preventDefault();
        if (!shoppingCart) {
          return;
        }
        if (!address) {
          setAddressError(true);
        }
        handleSubmit(onSubmit)();
      }}>
      <Map address={address} addressHandler={addressHandler} />
      <AddressAutocomplete address={address} addressHandler={addressHandler} />
      <span>{addressError && !address && "Please enter valid address"}</span>
      <InputMask
        mask="+38 (999) 999-99-99"
        {...register("phone")}
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <span>{errors.phone && errors.phone.message}</span>
      <input type="text" {...register("name")} />
      <span>{errors.name && errors.name.message}</span>
      <input type="text" {...register("email")} />
      <span>{errors.email && errors.email.message}</span>

      <button type="submit" disabled={!shoppingCart.length}>
        Submit
      </button>
    </S.Container>
  );
}
