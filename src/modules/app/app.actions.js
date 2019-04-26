import { createAction, dispatch } from "redux-act";

export const fetchAllDataStart = createAction("fetch all data start");
export const fetchAllDataSuccess = createAction("fetch all data success");
export const fetchAllDataFailure = createAction("fetch all data failure");

export const fetchPostByIdStart = createAction("fetch post by id");
export const fetchPostByIdSuccess = createAction("fetch post by id success");
export const fetchPostByIdFailure = createAction("fetch post by id failure");

export const showLoader = createAction("show loader");
export const hideLoader = createAction("hide loader");
export const changeLoader = createAction("change loader");

export const getCurrentIdSuccess = createAction("get current id");

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

export const fetchPostById = id => async (dispatch, getState) => {
  dispatch(showLoader());
  dispatch(fetchPostByIdStart());
  try {
    let result = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}`
    );
    if (result.status === 404) {
      dispatch(fetchPostByIdFailure("Not found page"));
      dispatch(showLoader());
    } else {
      result = await result.json();
      dispatch(fetchPostByIdSuccess(result));
      dispatch(hideLoader());
    }
  } catch (e) {
    dispatch(fetchPostByIdFailure(e));
  }
};

export const getCurrentId = data => async (dispatch, getState) => {
  dispatch(getCurrentIdSuccess(data));
};
