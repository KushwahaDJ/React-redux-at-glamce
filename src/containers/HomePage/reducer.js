import ActionTypes from "./constants";

const defaultReducer = {
  users: [],
};

export default function HomePageReducer(state = defaultReducer, action) {
  switch (action.type) {
    case ActionTypes.SET_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
}
