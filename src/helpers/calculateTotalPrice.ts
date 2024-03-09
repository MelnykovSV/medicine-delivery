import { IMedicineData } from "../interfaces";

interface ICartMedicineData extends IMedicineData {
  amount: number;
}

export default function calculateTotalPrice(
  cartMedicinesList: ICartMedicineData[]
) {
  return cartMedicinesList.reduce(
    (acc, item) => acc + item.amount * item.price,
    0
  );
}
