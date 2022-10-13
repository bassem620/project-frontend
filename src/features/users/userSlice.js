import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
    user: user? user : null,
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: ""
}

// Register User
export const register = createAsyncThunk(
    "user/register",
    async (user, thunkAPI) => {
        try{
            return await userService.register(user);
        } catch (error) {
            const message = 
            (
                error.response &&
                error.response.data &&
                error.response.data.message
            ) || error.message 
            || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Login User
export const login = createAsyncThunk(
    "user/login",
    async (user, thunkAPI) => {
        try {
            return await userService.login(user);
        } catch (error) {
            const message = 
            (
                error.response &&
                error.response.data &&
                error.response.data.message
            ) || error.message 
            || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Logout User
export const logout = createAsyncThunk(
    "user/logout",
    async _ => {
        await userService.logout();
    }
);

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        reset: state => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.message = "";
        }
    },
    extraReducers: builder => {
        builder
            // Register
            .addCase(register.pending, state => {
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.user = null;
            })
            // Login
            .addCase(login.pending, state => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.user = null;
            })
            // Logout
            .addCase(logout.fulfilled, state => {
                state.user = null;
            })
    }
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;