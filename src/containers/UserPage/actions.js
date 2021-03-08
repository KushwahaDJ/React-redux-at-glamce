import ActionTypes from "./constants";

const setUser = (user) => ({
  type: ActionTypes.SET_USER,
  payload: user,
});

export default setUser;
