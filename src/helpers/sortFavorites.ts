import { IMedicineData } from "../interfaces";

export default function sortFavorites(
  medicines: IMedicineData[],
  favorites: string[]
) {
  return medicines.sort((item) => (favorites.includes(item._id) ? -1 : 1));
}
