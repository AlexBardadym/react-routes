import { createReducer } from "redux-act";
import * as appActions from "./app.actions";

const initialState = {
  loader: true,
  posts: [],
  fetchAllDataStatus: "",

  failureMessage: ""
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
  })
};

export default createReducer(reducer, initialState);
