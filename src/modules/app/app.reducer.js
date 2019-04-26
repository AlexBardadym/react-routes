import { createReducer } from "redux-act";
import * as appActions from "./app.actions";

const initialState = {
  loader: true,
  posts: [],
  fetchAllDataStatus: "",
  fetchPostByIdStatus: "",
  currentId: 1,
  failureMessage: "",
  postById: []
};

const reducer = {
  [appActions.showLoader]: state => ({
    ...state,
    loader: true
  }),

  [appActions.hideLoader]: state => ({
    ...state,
    loader: false
  }),
  [appActions.changeLoader]: (state, value) => ({
    ...state,
    loader: value
  }),

  [appActions.fetchAllDataStart]: state => ({
    ...state,
    fetchAllDataStatus: "pending"
  }),

  [appActions.fetchAllDataSuccess]: (state, data) => ({
    ...state,
    fetchAllDataStatus: "success",
    posts: data
  }),

  [appActions.fetchAllDataFailure]: (state, failure) => ({
    ...state,
    fetchAllDataStatus: "failure",
    failureMessage: failure
  }),

  [appActions.fetchPostByIdStart]: state => ({
    ...state,
    fetchPostByIdStatus: "pending"
  }),

  [appActions.fetchPostByIdSuccess]: (state, data) => ({
    ...state,
    fetchPostByIdStatus: "success",
    postById: data
  }),

  [appActions.fetchPostByIdFailure]: (state, failure) => ({
    ...state,
    fetchPostByIdStatus: "failure",
    failureMessage: failure
  }),

  [appActions.getCurrentIdSuccess]: (state, data) => ({
    ...state,
    currentId: data
  })
};

export default createReducer(reducer, initialState);
