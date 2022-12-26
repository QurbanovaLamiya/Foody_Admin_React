import AddIcon from "@mui/icons-material/Add";

import OffersStyle from "./Offers.module.css";
import OffersTable from "./OffersTable";
import { useTranslation } from "react-i18next";


const OffersContainer = () => {
  const {t} = useTranslation()

  return (
    <div className={OffersStyle.Container}>
      <div className={OffersStyle.Caption}>
        <h1>{t("menu.Offers")}</h1>
        <button>
          <AddIcon />
          ADD OFFER
        </button>
      </div>
      <div className={OffersStyle.Table}>
        <OffersTable />
      </div>
    </div>
  );
};

export default OffersContainer;
