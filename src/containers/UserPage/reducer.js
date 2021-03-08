import ActionTypes from "./constants";

const defaultReducer = {
  user: null,
};

export default function UserPageReducer(state = defaultReducer, action) {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
