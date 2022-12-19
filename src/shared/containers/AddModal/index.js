// Material Ui
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import AddProductStyle from "./addModal.module.css";

import { useState } from "react";

const AddModal = () => {
  const [isDrawer, setIsDrawer] = useState(false);
  return (
    <>
      <button
        className={AddProductStyle.Add_Product}
        onClick={() => setIsDrawer(true)}
      >
        <AddIcon
          sx={{ fontSize: 20 }}
          style={{ marginRight: "5px" }}
          edge="start"
          aria-label="logo"
        />
        ADD PRODUCT
      </button>
      <Drawer anchor="right" open={isDrawer} onClose={() => setIsDrawer(false)}>
        <Box padding={2} width={250} textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            Side Panel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default AddModal;
