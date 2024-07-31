import { GridColDef } from "@mui/x-data-grid";

const arr = ["123", "1234"];

export const columnsUsers: GridColDef[] = [
  //   { field: "id", headerName: "ID", minWidth: 140 },
  { field: "name", headerName: "Name", minWidth: 140 },
  { field: "email", headerName: "Email", minWidth: 140 },
  {
    field: "balanceAmount",
    headerName: "Balance",
    minWidth: 140,
    renderCell: (params) => params.value.toFixed(2) + " $",
  },
  {
    field: "investModels",
    headerName: "Level 1",
    minWidth: 140,
    renderCell: (params: any) => params.row.investModels[0].id,
  },
];
