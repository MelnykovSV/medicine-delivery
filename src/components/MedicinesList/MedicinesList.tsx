import * as S from "./MedicinesList.styled";
import { axiosInstance } from "../../api";
import { useEffect, useState } from "react";
import { IMedicineData } from "../../interfaces";
import MedicinesListItem from "../MedicinesListItem/MedicinesListItem";
import { useSearchParams, useNavigate } from "react-router-dom";
import SortingComponent from "../SortingComponent/SortingComponent";
import Pagination from "@mui/material/Pagination";
import { sortFavorites } from "../../helpers";
import { useFavorites } from "../../hooks";
import { toast } from "react-toastify";
import { getErrorMessage } from "../../helpers";
import Loader from "../Loader/Loader";

interface IMedicinesListProps {
  currentPharmacyId: string;
}

export default function MedicinesList({
  currentPharmacyId,
}: IMedicinesListProps) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { favorites } = useFavorites();
  const [medicines, setMedicines] = useState<IMedicineData[]>([]);
  const [isLoading, setisLoading] = useState(false);

  const sortingParam = searchParams.get("sortingParam") || "createdAt";
  const sortingDirection = searchParams.get("sortingDirection") || "asc";
  const currentPage = Number(searchParams.get("page")) || 1;

  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    (async () => {
      setisLoading(true);
      try {
        const medicinesData = await axiosInstance(
          `api/medicines?pharmacy=${currentPharmacyId}&sortingParam=${sortingParam}&sortingDirection=${sortingDirection}&page=${currentPage}`
        );
        const medicines = medicinesData.data.data.medicines;
        const totalPages = medicinesData.data.data.totalPages;
        setTotalPages(totalPages);
        setMedicines(medicines);
        setisLoading(false);
      } catch (error) {
        toast.error(getErrorMessage(error));
        setisLoading(false);
      }
    })();
  }, [currentPharmacyId, sortingParam, sortingDirection, currentPage]);

  const handlePaginationChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    if (value === 1) {
      searchParams.delete("page");
    } else {
      searchParams.set("page", value.toString());
    }
    navigate(`?${searchParams.toString()}`);
  };

  return (
    <S.Container>
      <SortingComponent />
      {!isLoading && medicines ? (
        <ul>
          {sortFavorites(medicines, favorites).map((item) => (
            <MedicinesListItem
              key={item._id}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
              createdAt={item.createdAt}
              updatedAt={item.updatedAt}
            />
          ))}
        </ul>
      ) : (
        <Loader />
      )}

      {totalPages > 1 ? (
        <Pagination
          count={totalPages}
          page={currentPage}
          sx={{
            "& .MuiPagination-ul": {
              justifyContent: "center",
            },
            "& .MuiPaginationItem-root": {
              "&.Mui-selected": {
                pointerEvents: "none",
              },
            },
            "& .MuiPaginationItem-ellipsis": { border: "none" },
            "& .Mui-selected": {},
          }}
          onChange={handlePaginationChange}
        />
      ) : null}
    </S.Container>
  );
}
