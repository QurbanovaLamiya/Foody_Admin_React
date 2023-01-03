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

import { useEffect } from "react";
import { categoryAPI, categoryDeleteAPI } from "../../../api/category";
import { useTranslation } from "react-i18next";
import Loading from "../../../shared/components/Loading";

import { CATEGORY_DATA } from "../../../provider/types";
import { useCategoryProvider } from "../../../provider/Category/CategoryProvider";

const CategoryTable = () => {
  const { t } = useTranslation();
  const { state, dispatch } = useCategoryProvider();
  const { category } = state;

  useEffect(() => {
    !category.length && getCategory();
  }, [category]);

  const getCategory = () => {
    categoryAPI
      .then((res) => {
        dispatch({
          type: CATEGORY_DATA,
          payload: res.data.category.categories,
        });
      })
      .catch((err) => {
        // console.log("err", err);
      });
  };

  const deleteCategory = (id) => {
    Swal.fire({
      title: t("alert title"),
      text: t("alert category subTitle"),
      showCancelButton: true,
      cancelButtonColor: "",
      cancelButtonText: t("cancel"),
      confirmButtonColor: "#D63626",
      confirmButtonText: t("delete"),
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        categoryDeleteAPI(id)
          .then((res) => {
            let newArray = [...category].filter(
              (category) => category.id !== id
            );
            dispatch({ type: CATEGORY_DATA, payload: newArray });
          })
          .catch(() => {});
        toast.success(t("success category"), {
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

  if (!category.length) {
    return <Loading />;
  }

  return (
    <Paper sx={{ overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">{t("table.image")}</TableCell>
              <TableCell align="center">{t("table.name")}</TableCell>
              <TableCell align="center">{t("table.slug")}</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {category?.map((category) => (
              <TableRow key={category.id}>
                <TableCell align="center">{category.id}</TableCell>
                <TableCell align="center">
                  <img
                    src={category.image_url}
                    alt={category.category_name}
                    width={60}
                    height={50}
                    style={{ objectFit: "cover" }}
                  />
                </TableCell>
                <TableCell align="center">{category.category_name}</TableCell>
                <TableCell align="center">{category.category_slug}</TableCell>
                <TableCell align="center">
                  <DeleteOutlineIcon
                    style={{
                      color: " rgba(235, 87, 87, 0.61)",
                      fontSize: "30px",
                      cursor: "pointer",
                    }}
                    onClick={() => deleteCategory(category.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ToastContainer />
    </Paper>
  );
};

export default CategoryTable;
