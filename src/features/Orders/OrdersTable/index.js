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

import { useState, useEffect } from "react";

import { ordersAPI, ordersDeleteAPI } from "../../../api/orders";
import Loading from "../../../shared/components/Loading";

import { useTranslation } from "react-i18next";

const OrdersTable = () => {
  const { t } = useTranslation();
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
      title: t("alert title"),
      text: t("alert orders subTitle"),
      showCancelButton: true,
      cancelButtonColor: "",
      cancelButtonText: t("cancel"),
      confirmButtonColor: "#D63626",
      confirmButtonText: t("delete"),
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        ordersDeleteAPI(id)
          .then((res) => {
            let newArray = [...orders].filter((order) => order.id !== id);
            setOrders(newArray);
          })
          .catch(() => {});
        toast.success(t("success order"), {
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
    return <Loading />;
  }

  return (
    <TableContainer component={Paper} sx={{ maxHeight: 500 }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">{t("table.customer_id")}</TableCell>
            <TableCell align="center">{t("table.time")}</TableCell>
            <TableCell align="center">{t("table.delivery_address")}</TableCell>
            <TableCell align="center">{t("table.amount")}</TableCell>
            <TableCell align="center">{t("table.payment")}</TableCell>
            <TableCell align="center">{t("table.contact")}</TableCell>
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
