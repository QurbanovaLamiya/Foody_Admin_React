import CatType from "./CategoryType.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const CategoryType = () => {
  return (
    <div className={CatType.Select_Section}>
      <select className={CatType.Select}>
        <option>Category type</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <KeyboardArrowDownIcon className={CatType.Icon} />
    </div>
  );
};

export default CategoryType;
