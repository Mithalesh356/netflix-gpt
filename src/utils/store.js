import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";

const store = configureStore({
    reducer: {
        login: loginSlice,
        user: userSlice,
        movie:movieSlice
    }
});
export default store;