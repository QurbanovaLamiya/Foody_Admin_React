// Components
import DashboardStyle from "./DashboardContainer.module.css";
import Orders from "./Orders";
import TotalSalary from "./TotalSalary";
import AssignedRisks from "./AssignedRisks";
import ActionItems from "./ActionItems";

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
