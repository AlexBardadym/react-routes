import { createAction } from "redux-act";

export const fetchAllDataStart = createAction("fetch all data start");
export const fetchAllDataSuccess = createAction("fetch all data success");
export const fetchAllDataFailure = createAction("fetch all data failure");
export const showLoader = createAction("show loader");
export const hideLoader = createAction("hide loader");
export const changeLoader = createAction("change loader");

export const fetchAllData = () => async (dispatch, getState) => {
  dispatch(showLoader());
  dispatch(fetchAllDataStart());
  try {
    let result = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (result.status === 404) {
      dispatch(fetchAllDataFailure("Not found page"));
      dispatch(showLoader());
    } else {
      result = await result.json();
      dispatch(fetchAllDataSuccess(result));
      dispatch(hideLoader());
    }
  } catch (e) {
    dispatch(fetchAllDataFailure(e));
  }
};
