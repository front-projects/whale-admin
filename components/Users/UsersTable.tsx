"use client";

import React, { useState, useEffect } from "react";
import { DataGrid, GridPaginationModel, GridRowParams } from "@mui/x-data-grid";
import { getUsers } from "@/lib/requests";
import { User } from "./types";
import { tableStyle } from "./tableStyle";
import { HashLoader } from "react-spinners";
import { useRouter } from "next/navigation";
import { columnsUsers } from "./columnsUsers";

const CustomLoadingOverlay = () => {
  return (
    <div className="w-full h-full flex items-center justify-center text-3xl bg-[#17181e]">
      <HashLoader color="rgb(139, 92, 246)" size={130} />
    </div>
  );
};

const UsersTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(50);
  const [rowCount, setRowCount] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    const URL = process.env.NEXT_PUBLIC_API_URL;
    const delay = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));
    const fetchData = async () => {
      setLoading(true);
      try {
        await delay(1000);
        const fetchedUsers = await getUsers({ page: page + 1, pageSize });
        setUsers(fetchedUsers.users);
        setRowCount(fetchedUsers.totalUsers);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };

    fetchData();
  }, [page]);

  const handlePageChange = (params: GridPaginationModel) => {
    setPage(params.page);
  };
  const handleRowClick = (params: GridRowParams) => {
    router.push(`/menu/users/${params.row.id}`);
  };


  return (
    <div
      className="bg-gray-600/10 border-2 border-violet-500 rounded-md h-full w-full scroll-container"
      id="container-users"
    >
      <DataGrid
        rows={users}
        columns={columnsUsers}
        rowCount={rowCount}
        localeText={{
          noRowsLabel: error ? "Users upload error" : "No users",
        }}
        loading={loading}
        slots={{
          loadingOverlay: CustomLoadingOverlay,
        }}
        disableRowSelectionOnClick={true}
        pagination
        autosizeOnMount={true}
        paginationMode="server"
        paginationModel={{ page, pageSize }}
        onPaginationModelChange={(params) => {
          handlePageChange(params);
        }}
        sx={tableStyle}
        onRowClick={handleRowClick}
        disableVirtualization={true}
      />
    </div>
  );
};

export default UsersTable;
