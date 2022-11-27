import ActionItemsStyle from "./ActionItems.module.css";

const ActionItems = () => {
  return (
    <div className={ActionItemsStyle.Container}>
      <h1 className={ActionItemsStyle.Title}>Assigned Action Items</h1>
      <div className={ActionItemsStyle.Content}>
        <p>There are no action items assigned.</p>
      </div>
    </div>
  );
};

export default ActionItems;
