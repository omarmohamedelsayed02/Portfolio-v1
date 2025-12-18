import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './features/themeSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


// //import { useDispatch, useSelector } from 'react-redux';
// // Import the types you defined in your store file
// import type { RootState, AppDispatch } from './store'; 

// // Use .withTypes<T>() to create typed versions of the standard hooks:

// // Typed hook for retrieving state
// export const useAppSelector = useSelector.withTypes<RootState>(); 

// // Typed hook for dispatching actions
// export const useAppDispatch = useDispatch.withTypes<AppDispatch>();