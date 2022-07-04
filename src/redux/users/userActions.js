import {
  GETTING_USERS,
  GETTING_USERS_FAILED,
  GETTING_USERS_SUCCESS
} from "./userActionTypes";
import axios from "axios";

const gettingUsers = () => {
  return {
    type: GETTING_USERS
  };
};

const gettingUsersSuccess = (payload) => {
  return {
    type: GETTING_USERS_SUCCESS,
    payload
  };
};

const gettingUsersFailed = (payload) => {
  return {
    type: GETTING_USERS_FAILED
  };
};

export const getUsers = () => {
  console.log("HERE");

  return async (dispatch) => {
    return axios
      .get("http://localhost:3001/users")
      .then((res) => {
        // );
        console.log(res.data.users);
        setTimeout(() => {
          dispatch(gettingUsersSuccess(res.data.users));
        }, 3000);
      })
      .catch((err) => {
        console.log(" 3 HERE");
        console.log({ ...err });

        dispatch(gettingUsersFailed());
      });
  };
};
