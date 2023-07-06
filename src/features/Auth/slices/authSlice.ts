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
      const {email, isLoggedIn, phone, username, profile_pic, name} =
        action.payload;

      state.email = email;
      state.isLoggedIn = isLoggedIn;
      state.phone = phone;
      state.first_name = username;
      state.avatar = profile_pic;
      state.last_name = name;

      // Update other states here
      // state.otherState = action.payload.otherValue;
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
