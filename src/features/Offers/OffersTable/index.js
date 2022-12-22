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

import OffersTableStyle from "./OffersTable.module.css";

// Sweet Alert
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";

// Image
import Loading from "../../../image/loading/loading.gif";

import { useState, useEffect } from "react";
import { offersAPI, offersDeleteAPI } from "../../../api/offers";

const OffersTable = () => {
  const [offers, setOffers] = useState(null);

  useEffect(() => {
    getOffers();
  }, []);

  const getOffers = () => {
    offersAPI
      .then((res) => {
        setOffers(res.data.offers.Offers);
      })
      .catch((err) => {
        // console.log("err", err);
      });
  };

  const deleteOffers = (id) => {
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
        offersDeleteAPI(id)
          .then((res) => {
            let newArray = [...offers].filter((offer) => offer.id !== id);
            setOffers(newArray);
          })
          .catch(() => {});
        toast.success("The operation is successfully!", {
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

  if (!offers) {
    return (
      <img
        src={Loading}
        className={OffersTableStyle.Loading}
        alt="loading...."
      />
    );
  }

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
          {offers?.map((offer) => (
            <TableRow key={offer.id}>
              <TableCell align="center">{offer.id}</TableCell>
              <TableCell align="center">
                <img
                  src={offer.image_url}
                  alt={offer.title}
                  width={60}
                  height={50}
                  style={{ objectFit: "cover" }}
                />
              </TableCell>
              <TableCell align="center">{offer.title}</TableCell>
              <TableCell align="center">{offer.desc}</TableCell>
              <TableCell align="center">
                <DeleteOutlineIcon
                  style={{
                    color: " rgba(235, 87, 87, 0.61)",
                    fontSize: "30px",
                    cursor: "pointer",
                  }}
                  onClick={() => deleteOffers(offer.id)}
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

export default OffersTable;
