"use client";

import React, { useState, useEffect } from "react";
import { DataGrid, GridRowParams } from "@mui/x-data-grid";
import { getDeposits, getUsers } from "@/lib/requests";
import { tableStyle } from "../Users/tableStyle";
import { HashLoader } from "react-spinners";
import { useRouter } from "next/navigation";
import { Deposit } from "./types";
import { columnsDeposits } from "./DepositsColumns";

const CustomLoadingOverlay = () => {
  return (
    <div className="w-full h-full flex items-center justify-center text-3xl bg-[#17181e]">
      <HashLoader color="rgb(139, 92, 246)" size={130} />
    </div>
  );
};

const DepositsTable: React.FC = () => {
  const [deposits, setDeposits] = useState<Deposit[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const delay = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));
    const fetchData = async () => {
      setLoading(true);
      try {
        await delay(1000);
        const fetchedDeposits = await getDeposits();
        if (!fetchedDeposits) {
          setError(true);
        }
        setDeposits(fetchedDeposits);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleRowClick = (params: GridRowParams) => {
    router.push(`/menu/users/${params.row.id}`);
  };

  return (
    <div
      className="w-1/2 max-xl:w-2/3 max-lg:w-[80%] max-sm:w-full rounded-xl h-full"
      id="container-users"
    >
      <DataGrid
        rows={deposits}
        columns={columnsDeposits}
        localeText={{
          noRowsLabel: error ? "Users upload error" : "No deposits",
        }}
        loading={loading}
        slots={{
          loadingOverlay: CustomLoadingOverlay,
        }}
        disableRowSelectionOnClick={true}
        disableColumnResize={true}
        disableColumnMenu={true}
        pagination
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 100 },
          },
        }}
        sx={tableStyle}
        disableVirtualization={true}
      />
    </div>
  );
};

export default DepositsTable;
