// Material UI
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const columns = [
  { id: "ID", label: "ID", minWidth: 170, align: "center" },
  { id: "Image", label: "Image", minWidth: 100, align: "center" },
  { id: "Name", label: "Name", minWidth: 170, align: "center" },
  { id: "Slug", label: "Slug", minWidth: 170, align: "center" },
];

function createData(ID, Image, Name, Slug, Icon) {
  return { ID, Image, Name, Slug, Icon };
}

const rows = [
  createData("9177", "Image", "Pizza", "yummy-pizza", <DeleteOutlineIcon />),
  createData("9177", "Image", "Pizza", "yummy-pizza"),
  createData("9177", "Image", "Pizza", "yummy-pizza"),
  createData("9177", "Image", "Pizza", "yummy-pizza"),
  createData("9177", "Image", "Pizza", "yummy-pizza"),
  createData("9177", "Image", "Pizza", "yummy-pizza"),
  createData("9177", "Image", "Pizza", "yummy-pizza"),
  createData("9177", "Image", "Pizza", "yummy-pizza"),
  createData("9177", "Image", "Pizza", "yummy-pizza"),
  createData("9177", "Image", "Pizza", "yummy-pizza"),
];

const CategoryTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.Image}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default CategoryTable;
