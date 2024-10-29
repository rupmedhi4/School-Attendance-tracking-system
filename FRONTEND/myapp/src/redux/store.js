import { configureStore } from '@reduxjs/toolkit';
import classReducer from './slices/ClassSlice'



const store = configureStore({
  reducer: {
    classReducer
  },
});

export default store;
