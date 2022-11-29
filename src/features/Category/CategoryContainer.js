import CategoryStyle from "./Category.module.css";
import CategoryTable from "./CategoryTable";

import AddIcon from "@mui/icons-material/Add";


const CategoryContainer = () => {
  return (
    <div className={CategoryStyle.Container}>
      <div className={CategoryStyle.Caption}>
        <h1>Category</h1>
        <button >
          <AddIcon />
          ADD CATEGORY
        </button>
      </div>
      <div>
        <CategoryTable />
      </div>
    </div>
  );
};

export default CategoryContainer;
