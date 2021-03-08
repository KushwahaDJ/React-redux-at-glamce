import { createSelector } from "reselect";
import { useSelector, useDispatch } from "react-redux";
import { makeSelectUsers } from "./selectors";
import { useEffect } from "react";
import Axios from "axios";
import setUsers from "./actions";
import UserList from "./UserList";

const stateSelector = createSelector(makeSelectUsers, (users) => ({
  users,
}));

const actionDispatch = (dispatch) => ({
  setUser: (user) => dispatch(setUsers(user)),
});

const HomePage = (props) => {
  const { users } = useSelector(stateSelector);
  //   console.log(users);
  const { setUser } = actionDispatch(useDispatch());
  const fetchUsers = async () => {
    const response = await Axios.get("https://reqres.in/api/users").catch(
      (err) => {
        console.log(err);
      }
    );
    // console.log(response.data.data);
    setUser(response.data.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log("Users", users);
  return <UserList />;
};

export default HomePage;
