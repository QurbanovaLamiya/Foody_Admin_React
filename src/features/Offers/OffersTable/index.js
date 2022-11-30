// Material UI
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

// import OffersTableStyle from "./OffersTable.module.css";

const OffersTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Descriptions</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center">9177</TableCell>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Do you like Pizza at Pap...</TableCell>
            <TableCell align="center">Yummy this pizza but...</TableCell>
            <TableCell align="center">
              <DeleteOutlineIcon />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">9177</TableCell>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Do you like Pizza at Pap...</TableCell>
            <TableCell align="center">Yummy this pizza but...</TableCell>
            <TableCell align="center">
              <DeleteOutlineIcon />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">9177</TableCell>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Do you like Pizza at Pap...</TableCell>
            <TableCell align="center">Yummy this pizza but...</TableCell>
            <TableCell align="center">
              <DeleteOutlineIcon />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OffersTable;
