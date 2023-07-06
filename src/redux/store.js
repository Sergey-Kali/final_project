import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/auth-slice';
import noticesReducer from './notices/notices-slice';
import petsSlice from './pets/pets-slice';

const store = configureStore({
  reducer: { user: authSlice, notices: noticesReducer, pets: petsSlice },
});

export default store;
