import { createSelector } from "reselect";

const UserPageState = (state) => state.UserPageReducer;

export const makeSelectUser = createSelector(
  UserPageState,
  (userPage) => userPage.user
);
