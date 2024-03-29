import * as React from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

// Material UI
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

import { offersAPI, offersDeleteAPI } from "../../../api/offers";

import { useOfferProvider } from "../../../provider/Offer/OfferProvider";
import { OFFER_DATA } from "../../../provider/types";

import Loading from "../../../shared/components/Loading";

const OffersTable = () => {
  const { t } = useTranslation();

  const { state, dispatch } = useOfferProvider();
  const { offer } = state;

  useEffect(() => {
    !offer.length && getOffers();
  }, [offer]);

  const getOffers = () => {
    offersAPI
      .then((res) => {
        dispatch({
          type: OFFER_DATA,
          payload: res.data.offers.offers,
        });
      })
      .catch((err) => {
        // console.log("err", err);
      });
  };

  const deleteOffers = (id) => {
    Swal.fire({
      title: t("alert title"),
      text: t("alert offers subTitle"),
      showCancelButton: true,
      cancelButtonColor: "",
      cancelButtonText: t("cancel"),
      confirmButtonColor: "#D63626",
      confirmButtonText: t("delete"),
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        offersDeleteAPI(id)
          .then((res) => {
            let newArray = [...offer].filter((offer) => offer.id !== id);
            dispatch({ type: OFFER_DATA, payload: newArray });
          })
          .catch(() => {});
        toast.success(t("success offer"), {
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

  if (!offer.length) {
    return <Loading />;
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">{t("table.image")}</TableCell>
            <TableCell align="center">{t("table.title")}</TableCell>
            <TableCell align="center">{t("table.description")}</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {offer?.map((offer) => (
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
