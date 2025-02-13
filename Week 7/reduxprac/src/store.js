
import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './assets/features/counterSlice';

export const store = configureStore({
  reducer: {
    counter : counterReducer
  },
})


//after creating a store.js file
//step 2 : provide this redux store to react
//-- gp to main.jsx


//step 6 : use this redux state and actions in react components