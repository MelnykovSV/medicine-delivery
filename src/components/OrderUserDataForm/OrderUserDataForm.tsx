import * as S from "./OrderUserDataForm.styled";
import AddressAutocomplete from "../AddressAutocomplete/AddressAutocomplete";
import { useState } from "react";
import { Address } from "../../interfaces";
import Map from "../Map/Map";
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
  const [isLoading, setIsLoading] = useState(false);
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
      setIsLoading(true);
      try {
        await axiosInstance.post("api/orders", {
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
        setIsLoading(false);
      } catch (error) {
        toast.error(getErrorMessage(error));
        setIsLoading(false);
      }
    } else {
      const userId = nanoid();
      setItem("userId", userId);
      setIsLoading(true);

      try {
        await axiosInstance.post("api/orders", {
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
        setIsLoading(false);
      } catch (error) {
        toast.error(getErrorMessage(error));
        setIsLoading(false);
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
      <S.ErrorField>
        {addressError && !address && "Please enter valid address"}
      </S.ErrorField>
      <S.StyledInputWithMask
        placeholder="Enter phone here"
        mask="+38 (999) 999-99-99"
        {...register("phone")}
      />
      <S.ErrorField>{errors.phone && errors.phone.message}</S.ErrorField>
      <S.StyledInput
        placeholder="Enter name here"
        type="text"
        {...register("name")}
      />
      <S.ErrorField>{errors.name && errors.name.message}</S.ErrorField>
      <S.StyledInput
        placeholder="Enter email here"
        type="text"
        {...register("email")}
      />
      <S.ErrorField>{errors.email && errors.email.message}</S.ErrorField>

      <S.StyledButton
        type="submit"
        className={`${isLoading ? "loading" : ""} ${
          !shoppingCart.length ? "disabled" : ""
        }`}
        disabled={!shoppingCart.length}>
        Register the order
      </S.StyledButton>
    </S.Container>
  );
}
