export interface IPharmacieData {
  _id: string;
  name: string;
  address: string;
}

export interface IMedicineData {
  _id: string;
  name: string;
  price: number;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export type Address = {
  addressLine: string;
  lat: number;
  lon: number;
} | null;

export interface IOrderData {
  createdAt: string;
  email: string;
  name: string;
  phone: string;
  totalPrice: number;
  _id: string;
  address: {
    addressLine: string;
    lat: number;
    lon: number;
  };
  shoppingCart: {
    id: string;
    amount: number;
    price: number;
    name: string;
    image: string;
  }[];
}
