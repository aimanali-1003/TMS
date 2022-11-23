import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "Name", headerName: "Name", width: 130 },
  { field: "Department", headerName: "Department", width: 130 },
  { field: "Date", headerName: "Date", width: 130 },
  {
    field: "Role",
    headerName: "Role",
    width: 90,
  },
  {
    field: "Groups",
    headerName: "Groups",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
  },
  {
    field: "Status",
    headerName: "Status",
    width: 130,
  },
  {
    field: "Action",
    headerName: "Action",
    width: 130,
  },
];

const rows = [
  { id: 1, Name: "Jon" },
  { id: 2, Name: "Cersei", age: 42 },
  { id: 3, Name: "Jaime", age: 45 },
  { id: 4, Name: "Arya", age: 16 },
  { id: 5, Name: "Daenerys", age: null },
  { id: 6, Name: "Melisandre", age: 150 },
  { id: 7, Name: "Ferrara", age: 44 },
  { id: 8, Name: "Rossini", age: 36 },
  { id: 9, Name: "Harvey", age: 65 },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        // rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
