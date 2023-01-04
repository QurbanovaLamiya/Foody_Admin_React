import AddIcon from "@mui/icons-material/Add";

import ButtonStyle from "./Button.module.css";

import { useTranslation } from "react-i18next";

const Button = ({ setDrawer, buttonName }) => {
  const { t } = useTranslation();
  return (
    <button className={ButtonStyle.Add_Button} onClick={() => setDrawer(true)}>
      <AddIcon
        sx={{ fontSize: 18 }}
        style={{ marginRight: "5px" }}
        edge="start"
        aria-label="logo"
      />
      {t(`${buttonName}`)}
    </button>
  );
};

export default Button;
