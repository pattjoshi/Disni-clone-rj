import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import movieReducer from "../feachers/movie/movieSlice";
import userReducer from "../feachers/users/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
