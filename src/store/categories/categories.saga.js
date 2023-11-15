import { put, all, call, takeLatest } from "redux-saga/effects";

import { getCategoriesAndDocuments } from "../../utils/firebase.utils";
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from "./categories.action";
import CATEGORIES_ACTION_TYPES from "./categories.types";

/* export const fetchCategoriesStartAsync = () => {
    return async (dispatch) => {
      dispatch(fetchCategoriesStart());
      try {
        const categoriesMap = await getCategoriesAndDocuments("categories");
        dispatch(fetchCategoriesSuccess(categoriesMap));
      } catch (error) {
        dispatch(fetchCategoriesFailure(error));
      }
    };
  }; */

export function* fetchCategoriesStartAsync() {
  try {
    const categoriesMap = yield call(getCategoriesAndDocuments, "categories");
    yield put(fetchCategoriesSuccess(categoriesMap));
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  }
}
export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesStartAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
