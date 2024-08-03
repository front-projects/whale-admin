import { GridColDef } from "@mui/x-data-grid";
import dayjs from "dayjs";

export const columnsDeposits: GridColDef[] | any[] = [
    //   { field: "id", headerName: "ID", minWidth: 140 },
    { field: "name", headerName: "Name", flex: 1, minWidth:200 },
    { field: "adress", headerName: "Adress", flex: 2, minWidth:200},
    { field: "amount", headerName: "Amount", flex: 1, minWidth:200},
    { field: "createdAt", headerName: "Date", flex: 1, minWidth:200, renderCell:(params) => dayjs(params.value).format('DD/MM/YYYY - hh:mm:ss')},
    
    // {
    //   field: "balanceAmount",
    //   headerName: "Balance",
    //   minWidth: 140,
    //   renderCell: (params) => params.value.toFixed(2) + " $",
    // },
    // {
    //   field: "investModels",
    //   headerName: "Level 1",
    //   minWidth: 140,
    //   renderCell: (params: any) => params.row.investModels[0].id,
    // },
  ];