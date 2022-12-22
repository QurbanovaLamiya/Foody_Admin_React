// Material UI
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { useState, useEffect } from "react";
import { categoryAPI } from "../../../api/category";

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
                    style={{objectFit:"cover"}}
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
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default CategoryTable;
