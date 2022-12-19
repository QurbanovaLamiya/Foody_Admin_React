import TotalSalaryStyle from "./TotalSalary.module.css";
import Area from "../Charts/Area";

const TotalSalary = () => {
  return (
    <div className={TotalSalaryStyle.Container}>
      <h1 className={TotalSalaryStyle.Title}>Total Salary</h1>
      <Area />
    </div>
  );
};

export default TotalSalary;
