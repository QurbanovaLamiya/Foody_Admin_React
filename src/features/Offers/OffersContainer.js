import OffersStyle from "./Offers.module.css";
import OffersTable from "./OffersTable";
import { useTranslation } from "react-i18next";
import Modal from "../../shared/containers/Modal";
import OfferForm from "../../shared/containers/Form/OfferForm";

const OffersContainer = () => {
  const { t } = useTranslation();

  return (
    <div className={OffersStyle.Container}>
      <div className={OffersStyle.Caption}>
        <h1>{t("menu.Offers")}</h1>
        <Modal button="ADD OFFER" title="Add Offer">
          <OfferForm />
        </Modal>
      </div>
      <div className={OffersStyle.Table}>
        <OffersTable />
      </div>
    </div>
  );
};

export default OffersContainer;
