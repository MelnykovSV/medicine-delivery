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