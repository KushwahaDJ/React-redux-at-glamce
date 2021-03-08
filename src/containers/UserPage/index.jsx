import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react'
import setUser from './actions';
import Axios from 'axios'
import { createSelector } from 'reselect';
import { makeSelectUser } from './selectors';
import styled from 'styled-components';


const UserContainer = styled.div`
  width: 100%;
  display: flex;
  align-item: center;
  justify-content: center;
`;

const UserWraper = styled.div`
  display: flex;
  align-item: center;
  flex-direction: column;
`;

const UserImage = styled.div`
  width: 7em;
  height: 7em;
  img {
    width: 100%;
    height: 100%;
  }
`;

const UserName = styled.h3`
  text-align:center;
  font-size: 20px;
  color: #000;
  margin: 0;
`;

const UserEmail = styled.h3`
text-align:center;
  font-size: 18px;
  color: #0008;
  margin: 0;
`;

const stateSelector = createSelector(makeSelectUser, (user) => ({
    user
}))

const actionDispath = (dispatch) => ({
    setUser: (user) =>  dispatch(setUser(user))
})

const UserPage = () => {
    const { user } = useSelector(stateSelector)
    const { setUser } = actionDispath( useDispatch() )

    const { userId } = useParams()
    const fetchUser = async (id) => {
        const response = await Axios.get(`https://reqres.in/api/users/${id}`).catch(
            (err) => {
              console.log(err);
            }
          );
          console.log(response.data.data)
          if(response)
        setUser(response.data.data)
    }
    

    useEffect(() => {
        if(userId && userId !== '')
        fetchUser(userId)
    }, [userId])

    if(!user)
        return <div>Loading...</div>
    return <UserContainer>
        <UserWraper>
        <UserImage>
            <img src={user.avatar} alt="" />
        </UserImage>
        <UserName>{user.first_name} {user.last_name}</UserName>
        <UserEmail>{user.email}</UserEmail>
        </UserWraper>
    </UserContainer>
}

export default UserPage
