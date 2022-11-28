// Components
import Orders from "./Orders";
import TotalSalary from "./TotalSalary";
import AssignedRisks from "./AssignedRisks";
import ActionItems from "./ActionItems";

// Style
import DashboardStyle from "./Dashboard.module.css";

const DashboardContainer = () => {
  return (
    <div className={DashboardStyle.Container}>
      <Orders />
      <TotalSalary />
      <AssignedRisks />
      <ActionItems />
    </div>
  );
};

export default DashboardContainer;
