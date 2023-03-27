import { GridColDef } from "@mui/x-data-grid";

export const pokemonColumns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
    editable: false,
  },
  {
    field: "weight",
    headerName: "Weight",
    width: 150,
    editable: false,
  },
];
