// Material UI
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const columns = [
  { id: "ID", label: "ID", minWidth: 100, align: "left" },
  { id: "Image", label: "Image", minWidth: 100, align: "left" },
  { id: "Name", label: "Name", minWidth: 100, align: "left" },
  { id: "Slug", label: "Slug", minWidth: 100, align: "left" },
];

function createData(ID, Image, Name, Slug) {
  return { ID, Image, Name, Slug };
}

const rows = [
  createData("9177", "Image", "Pizza", "yummy-pizza"),
  createData("9187", "Image", "Pizza", "yummy-pizza"),
  createData("9777", "Image", "Pizza", "yummy-pizza"),
  createData("9171", "Image", "Pizza", "yummy-pizza"),
  createData("9176", "Image", "Pizza", "yummy-pizza"),
  createData("9173", "Image", "Pizza", "yummy-pizza"),
  createData("9157", "Image", "Pizza", "yummy-pizza"),
  createData("9117", "Image", "Pizza", "yummy-pizza"),
  createData("8177", "Image", "Pizza", "yummy-pizza"),
  createData("2177", "Image", "Pizza", "yummy-pizza"),
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

  // const deleteCategory = (id) => {};

  return (
    <>
      <Paper sx={{ overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 600 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth, height: 65 }}
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
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.ID}
                      style={{
                        position: "relative",
                      }}
                    >
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
                      <TableCell
                        style={{
                          position: "absolute",
                          top: 0,
                          bottom: 0,
                          right: "30px",
                        }}
                      >
                        <DeleteOutlineIcon
                          style={{
                            color: " rgba(235, 87, 87, 0.61)",
                            fontSize: "30px",
                            cursor: "pointer",
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <TablePagination
        style={{width:"100%", marginTop: "38px",background:"red"}}
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPage={rowsPerPage}
      />
    </>
  );
};

export default CategoryTable;
