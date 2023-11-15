import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

export const selectIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
export const selectCategoriesMap = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categoriesMap
);
