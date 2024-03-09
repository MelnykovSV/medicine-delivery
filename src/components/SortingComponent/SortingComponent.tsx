import * as S from "./SortingComponent.styled";
import { useSearchParams, useNavigate } from "react-router-dom";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export default function SortingComponent() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const sortingParam = searchParams.get("sortingParam") || "createdAt";
  const sortingDirection = searchParams.get("sortingDirection") || "asc";

  const handleSelect = (e: SelectChangeEvent<string>) => {
    if (e.target.value === "createdAt") {
      searchParams.delete("sortingParam");
      navigate(`?${searchParams.toString()}`);
    } else if (e.target.value === "price") {
      searchParams.set("sortingParam", "price");
      navigate(`?${searchParams.toString()}`);
    }
  };

  return (
    <S.Container>
      <Select
        id="sorting-param-select"
        value={sortingParam}
        sx={{ height: "50px" }}
        onChange={handleSelect}>
        <MenuItem value={"createdAt"}>Date added</MenuItem>
        <MenuItem value={"price"}>Price</MenuItem>
      </Select>
      <S.ButtonsContainer>
        <S.StyledSortingButton
          type="button"
          className={`${sortingDirection === "asc" ? "active" : ""}`}
          onClick={() => {
            searchParams.delete("sortingDirection");
            navigate(`?${searchParams.toString()}`);
          }}>
          <FaArrowUp />
        </S.StyledSortingButton>
        <S.StyledSortingButton
          type="button"
          className={`${sortingDirection === "desc" ? "active" : ""}`}
          onClick={() => {
            searchParams.set("sortingDirection", "desc");
            navigate(`?${searchParams.toString()}`);
          }}>
          <FaArrowDown />
        </S.StyledSortingButton>
      </S.ButtonsContainer>
    </S.Container>
  );
}
