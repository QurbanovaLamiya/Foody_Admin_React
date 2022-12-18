// Components
import Orders from "./Orders";
import TotalSalary from "./TotalSalary";
import AssignedRisks from "./AssignedRisks";
import ActionItems from "./ActionItems";

import { Container } from "@mui/system";

// Style
import DashboardStyle from "./Dashboard.module.css";

const DashboardContainer = () => {
  return (
    // <Container maxWidth="xl" style={{background:"yellow"}}>
      <div className={DashboardStyle.Container}>
        <Orders />
        <TotalSalary />
        <AssignedRisks />
        <ActionItems />
      </div>
    // </Container>
  );
};

export default DashboardContainer;
