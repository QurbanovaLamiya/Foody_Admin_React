import OffersContainer from "../../features/Offers/OffersContainer";
import { OfferProvider } from "../../provider/Offer/OfferProvider";

const Offers = () => (
  <OfferProvider>
    <OffersContainer />;
  </OfferProvider>
);

export default Offers;
