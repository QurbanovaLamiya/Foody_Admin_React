import AssignedRisksStyle from "./AssignedRisks.module.css";

const AssignedRisks = () => {
  return (
    <div className={AssignedRisksStyle.Container}>
      <h1 className={AssignedRisksStyle.Title}>Assigned Risks</h1>
      <div className={AssignedRisksStyle.Content}>
        <p>There are no risks assigned.</p>
      </div>
    </div>
  );
};

export default AssignedRisks;
