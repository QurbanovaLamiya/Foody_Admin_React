import OffersStyle from "./Offers.module.css";
import OffersTable from "./OffersTable";
import { useTranslation } from "react-i18next";
import Modal from "../../shared/containers/Modal";
import OfferForm from "../../shared/containers/Form/OfferForm";
import { useState } from "react";

const OffersContainer = () => {
  const { t } = useTranslation();
  const [isDrawer, setIsDrawer] = useState(false);

  return (
    <div className={OffersStyle.Container}>
      <div className={OffersStyle.Caption}>
        <h1>{t("menu.Offers")}</h1>
        <Modal
          button="ADD OFFER"
          title="Add Offer"
          drawer={isDrawer}
          setDrawer={setIsDrawer}
        >
          <OfferForm setDrawer={setIsDrawer} />
        </Modal>
      </div>
      <div className={OffersStyle.Table}>
        <OffersTable />
      </div>
    </div>
  );
};

export default OffersContainer;
