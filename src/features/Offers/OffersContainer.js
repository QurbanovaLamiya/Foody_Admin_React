import AddIcon from "@mui/icons-material/Add";

import OffersStyle from "./Offers.module.css";
import OffersTable from "./OffersTable";

const OffersContainer = () => {
  return (
    <div className={OffersStyle.Container}>
      <div className={OffersStyle.Caption}>
        <h1>Offers</h1>
        <button>
          <AddIcon />
          ADD OFFER
        </button>
      </div>
      <div>
        <OffersTable />
      </div>
    </div>
  );
};

export default OffersContainer;
