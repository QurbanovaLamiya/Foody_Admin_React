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

// Sweet Alert
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";

// Image
import Loading from "../../../image/loading/loading.gif";

import { useState, useEffect } from "react";
import { ordersAPI, ordersDeleteAPI } from "../../../api/orders";

import OrdersTableStyle from "./OrdersTable.module.css";

const OrdersTable = () => {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = () => {
    ordersAPI
      .then((res) => {
        setOrders(res.data.orders.orders);
      })
      .catch((err) => {
        // console.log("err", err);
      });
  };

  const deleteOrders = (id) => {
    Swal.fire({
      title: "Are you sure it’s deleted ?",
      text: "Attention! If you delete this product, it will not come back...",
      showCancelButton: true,
      cancelButtonColor: "",
      cancelButtonText: "cancel",
      confirmButtonColor: "#D63626",
      confirmButtonText: "delete",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        ordersDeleteAPI(id)
          .then((res) => {
            let newArray = [...orders].filter((order) => order.id !== id);
            setOrders(newArray);
          })
          .catch(() => {});
        toast.success("Product deleted successfully!", {
          position: "top-right",
          autoClose: 1200,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    });
  };

  if (!orders) {
    return (
      <img
        src={Loading}
        className={OrdersTableStyle.Loading}
        alt="loading...."
      />
    );
  }

  return (
    <TableContainer component={Paper} sx={{ maxHeight: 500 }}>
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
          {orders?.map((order) => (
            <TableRow key={order.id}>
              <TableCell align="center">{order.id}</TableCell>
              <TableCell align="center">{order.customer_id}</TableCell>
              <TableCell align="center">{order.time}</TableCell>
              <TableCell align="center">{order.delivery_address}</TableCell>
              <TableCell align="center">{order.amount}</TableCell>
              <TableCell align="center">{order.payment}</TableCell>
              <TableCell align="center">{order.contact}</TableCell>
              <TableCell align="center">
                <DeleteOutlineIcon
                  style={{
                    color: " rgba(235, 87, 87, 0.61)",
                    fontSize: "30px",
                    cursor: "pointer",
                  }}
                  onClick={() => deleteOrders(order.id)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ToastContainer />
    </TableContainer>
  );
};

export default OrdersTable;
