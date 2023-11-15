import { Fragment } from "react";
import { useSelector } from "react-redux";

import CategoryPreview from "../../../components/shop-item/category-preview/category-preview.component";
import {
  selectCategoriesMap,
  selectIsLoading,
} from "../../../store/categories/categories.selector";

import Laoding from "../../../components/loading/loading.component";
import "./categories-preview.styles.scss";
const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);

  return (
    <Fragment>
      {isLoading ? (
        <Laoding />
      ) : (
        <div className="categories-preview-container">
          {Object.keys(categoriesMap).length === 0 ? (
            <div className="vpn">please run VPN and refrech</div>
          ) : (
            Object.keys(categoriesMap).map((title) => {
              const products = categoriesMap[title];
              return (
                <CategoryPreview
                  key={title}
                  title={title}
                  products={products}
                />
              );
            })
          )}
        </div>
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
