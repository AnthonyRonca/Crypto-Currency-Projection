import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
//import coinsReducer from '../features/
export const store = configureStore({
  reducer: {
    //coins: coinsReducer,
    // counter: counterReducer,
  },
});
