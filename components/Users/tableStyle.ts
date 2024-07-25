export const tableStyle = {
  "& .MuiDataGrid-row": {
    backgroundColor: "inherit",
    border: "none",
    "&:hover": {
      backgroundColor: "rgba(139, 92, 246,.1)",
      cursor: "pointer",
    },
    ":first-of-type":{
      // borderTop:'none'
    }
  },
  "& .MuiDataGrid-cell": {
    color: "white",
  },
  "& .MuiDataGrid-footerContainer": {
    backgroundColor: "#8B5CF6",
    color: "white",
    border: "none",
  },
  "& .MuiTablePagination-root": {
    backgroundColor: "#8B5CF6",
    color: "white",
  },
  "& .MuiDataGrid-overlay": {
    backgroundColor: "#17181e", 
    color: "white",
  },
  "& .MuiDataGrid-noRowsOverlay": {
    backgroundColor: "#17181e", 
    color: "white",
  },
  "& .MuiDataGrid-loadingOverlay": {
    backgroundColor: "#17181e", 
    color: "white",
  },
};
