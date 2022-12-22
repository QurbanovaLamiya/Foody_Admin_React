// Material UI
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import CategoryTableStyle from "./CategoryTable.module.css";

// Sweet Alert
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";

// Image
import Loading from "../../../image/loading/loading.gif";

import { useState, useEffect } from "react";
import { categoryAPI, categoryDeleteAPI } from "../../../api/category";

const CategoryTable = () => {
  const [category, setCategory] = useState(null);

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = () => {
    categoryAPI
      .then((res) => {
        setCategory(res.data.category.categories);
      })
      .catch((err) => {
        // console.log("err", err);
      });
  };

  const deleteCategory = (id) => {
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
        categoryDeleteAPI(id)
          .then((res) => {
            let newArray = [...category].filter(
              (category) => category.id !== id
            );
            setCategory(newArray);
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

  if (!category) {
    return (
      <img
        src={Loading}
        className={CategoryTableStyle.Loading}
        alt="loading...."
      />
    );
  }

  return (
    <Paper sx={{ overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Image</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Slug</TableCell>
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
