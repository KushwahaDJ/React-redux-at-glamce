import { createSelector } from "reselect";

const homePageState = (state) => state.HomePageReducer;

export const makeSelectUsers = createSelector(
  homePageState,
  (homePage) => homePage.users
);
