import {createSlice} from '@reduxjs/toolkit';

export interface UserState {
  isLoggedIn: boolean;
  phone: string;
  email: string;
  first_name: string;
  avatar: string;
  last_name: string;
  //   role: string;
}

const initialState: UserState = {
  isLoggedIn: false,
  phone: '',
  email: '',
  first_name: '',
  avatar: '',
  last_name: '',
};

export const authSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    setSignIn: (state, action) => {
      state.email = action.payload.email;
      state.isLoggedIn = action.payload.isLoggedIn;
      state.phone = action.payload.phone;
      state.first_name = action.payload.username;
      state.avatar = action.payload.profile_pic;
      state.last_name = action.payload.name;
    },
    setSignOut: state => {
      state.email = '';
      state.phone = '';
      state.first_name = '';
      state.last_name = '';
      state.avatar = '';
      state.isLoggedIn = false;
    },
  },
});

export const {setSignIn, setSignOut} = authSlice.actions;

export const selectIsLoggedIn = (state: {auth: UserState}) =>
  state.auth.isLoggedIn;

export const selectEmail = (state: {auth: UserState}) => state.auth.email;

export const selectPhone = (state: {auth: UserState}) => state.auth.phone;

export const selectFirstName = (state: {auth: UserState}) =>
  state.auth.first_name;

export const selectAvatar = (state: {auth: UserState}) => state.auth.avatar;

export const selectLastName = (state: {auth: UserState}) =>
  state.auth.last_name;

export default authSlice.reducer;
