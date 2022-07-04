import {
  GETTING_USERS,
  GETTING_USERS_FAILED,
  GETTING_USERS_SUCCESS
} from "./userActionTypes";

const initialState = {
  users: [],
  loading: true,
  success: false
};

const userReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case GETTING_USERS:
      state.users = [];
      state.loading = true;
      state.success = false;
      return state;
    case GETTING_USERS_SUCCESS:
      state = { ...state, users: payload };
      state.loading = false;
      state.success = true;
      return state;

    case GETTING_USERS_FAILED:
      state.users = [];
      state.loading = false;
      state.success = false;
      return state;
    default:
      return state;
  }
};

export default userReducer;
