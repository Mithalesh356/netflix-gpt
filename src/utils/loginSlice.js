import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isSignUp: false,
    },
    reducers: {
        toggleForm: (state, actions) => {
            state.isSignUp = !state.isSignUp;
        }
    }
});
export const { toggleForm } = loginSlice.actions;
export default loginSlice.reducer;