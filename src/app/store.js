import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/users/userSlice';
import adReducer from "../features/ads/adSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    ad: adReducer
  },
});
