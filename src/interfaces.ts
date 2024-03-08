export interface IPharmacieData {
  _id: string;
  name: string;
  address: string;
}

export interface IMedicineData {
  _id: string;
  name: string;
  price: number;
  image: string,
  createdAt: Date,
  updatedAt: Date
}
