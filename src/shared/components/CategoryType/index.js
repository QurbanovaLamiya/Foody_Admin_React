import CatType from "./CategoryType.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { useEffect } from "react";
import { categoryAPI } from "../../../api/category";
import { useCategoryProvider } from "../../../provider/Category/CategoryProvider";
import { CATEGORY_DATA } from "../../../provider/types";

const CategoryType = () => {
  const { state, dispatch } = useCategoryProvider();
  const { category } = state;

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = () => {
    categoryAPI
      .then((res) => {
        dispatch({
          type: CATEGORY_DATA,
          payload: res.data.category.categories,
        });
      })
      .catch((err) => {
        // console.log("err", err);
      });
  };

  return (
    <div className={CatType.Select_Section}>
      <select className={CatType.Select}>
        <option>Category type</option>
        {category?.map((category) => (
          <option key={category.id} value={category.category_slug}>
            {category.category_slug}
          </option>
        ))}
      </select>
      <KeyboardArrowDownIcon className={CatType.Icon} />
    </div>
  );
};

export default CategoryType;
