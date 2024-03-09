import * as S from "./FilterTab.styled";
import { useRef } from "react";

interface IFilterTabProps {
  emailQueryHandler: (value: string) => void;
  phoneQueryHandler: (value: string) => void;
  orderIdQueryHandler: (value: string) => void;
}

export default function FilterTab({
  emailQueryHandler,
  phoneQueryHandler,
  orderIdQueryHandler,
}: IFilterTabProps) {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const orderIdInputRef = useRef<HTMLInputElement>(null);

  const butonHandler = () => {
    if (emailInputRef.current) {
      emailQueryHandler(emailInputRef.current.value);
    }
    if (phoneInputRef.current) {
      phoneQueryHandler(phoneInputRef.current.value);
    }
    if (orderIdInputRef.current) {
      orderIdQueryHandler(orderIdInputRef.current.value);
    }
  };
  return (
    <S.Container>
      <h2>Filter your orders</h2>
      <S.StyledInputWithMask
        placeholder="Enter Phone here"
        mask="+38 (999) 999-99-99"
        ref={phoneInputRef as any}
      />
      <S.StyledInput
        placeholder="Enter Order Id here"
        type="text"
        ref={orderIdInputRef}
      />
      <S.StyledInput
        placeholder="Enter Email here"
        type="text"
        ref={emailInputRef}
      />

      <S.StyledButton type="button" onClick={butonHandler}>
        Filter
      </S.StyledButton>
    </S.Container>
  );
}
