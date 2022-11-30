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

// import OrdersTableStyle from "./OrdersTable.module.css";

const OrdersTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Customer ID</TableCell>
            <TableCell align="center">Time</TableCell>
            <TableCell align="center">Delivery Address</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="center">Payment Method</TableCell>
            <TableCell align="center">Contact</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center">9177</TableCell>
            <TableCell align="center">022401</TableCell>
            <TableCell align="center">25 Dec 2021</TableCell>
            <TableCell align="center">
              29 Eve Street, 543 Evenue
              <br /> Road, Ny 87876{" "}
            </TableCell>
            <TableCell align="center">$249.7 </TableCell>
            <TableCell align="center">Cash On Delivery </TableCell>
            <TableCell align="center">994-51-410-3130 </TableCell>
            <TableCell align="center">
              <DeleteOutlineIcon />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">9177</TableCell>
            <TableCell align="center">022401</TableCell>
            <TableCell align="center">25 Dec 2021</TableCell>
            <TableCell align="center">
              29 Eve Street, 543 Evenue
              <br /> Road, Ny 87876{" "}
            </TableCell>
            <TableCell align="center">$249.7 </TableCell>
            <TableCell align="center">Cash On Delivery </TableCell>
            <TableCell align="center">994-51-410-3130 </TableCell>
            <TableCell align="center">
              <DeleteOutlineIcon />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">9177</TableCell>
            <TableCell align="center">022401</TableCell>
            <TableCell align="center">25 Dec 2021</TableCell>
            <TableCell align="center">
              29 Eve Street, 543 Evenue
              <br /> Road, Ny 87876{" "}
            </TableCell>
            <TableCell align="center">$249.7 </TableCell>
            <TableCell align="center">Cash On Delivery </TableCell>
            <TableCell align="center">994-51-410-3130 </TableCell>
            <TableCell align="center">
              <DeleteOutlineIcon />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">9177</TableCell>
            <TableCell align="center">022401</TableCell>
            <TableCell align="center">25 Dec 2021</TableCell>
            <TableCell align="center">
              29 Eve Street, 543 Evenue
              <br /> Road, Ny 87876{" "}
            </TableCell>
            <TableCell align="center">$249.7 </TableCell>
            <TableCell align="center">Cash On Delivery </TableCell>
            <TableCell align="center">994-51-410-3130 </TableCell>
            <TableCell align="center">
              <DeleteOutlineIcon />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">9177</TableCell>
            <TableCell align="center">022401</TableCell>
            <TableCell align="center">25 Dec 2021</TableCell>
            <TableCell align="center">
              29 Eve Street, 543 Evenue
              <br /> Road, Ny 87876{" "}
            </TableCell>
            <TableCell align="center">$249.7 </TableCell>
            <TableCell align="center">Cash On Delivery </TableCell>
            <TableCell align="center">994-51-410-3130 </TableCell>
            <TableCell align="center">
              <DeleteOutlineIcon />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">9177</TableCell>
            <TableCell align="center">022401</TableCell>
            <TableCell align="center">25 Dec 2021</TableCell>
            <TableCell align="center">
              29 Eve Street, 543 Evenue
              <br /> Road, Ny 87876{" "}
            </TableCell>
            <TableCell align="center">$249.7 </TableCell>
            <TableCell align="center">Cash On Delivery </TableCell>
            <TableCell align="center">994-51-410-3130 </TableCell>
            <TableCell align="center">
              <DeleteOutlineIcon />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">9177</TableCell>
            <TableCell align="center">022401</TableCell>
            <TableCell align="center">25 Dec 2021</TableCell>
            <TableCell align="center">
              29 Eve Street, 543 Evenue
              <br /> Road, Ny 87876{" "}
            </TableCell>
            <TableCell align="center">$249.7 </TableCell>
            <TableCell align="center">Cash On Delivery </TableCell>
            <TableCell align="center">994-51-410-3130 </TableCell>
            <TableCell align="center">
              <DeleteOutlineIcon />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">9177</TableCell>
            <TableCell align="center">022401</TableCell>
            <TableCell align="center">25 Dec 2021</TableCell>
            <TableCell align="center">
              29 Eve Street, 543 Evenue
              <br /> Road, Ny 87876{" "}
            </TableCell>
            <TableCell align="center">$249.7 </TableCell>
            <TableCell align="center">Cash On Delivery </TableCell>
            <TableCell align="center">994-51-410-3130 </TableCell>
            <TableCell align="center">
              <DeleteOutlineIcon />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrdersTable;
