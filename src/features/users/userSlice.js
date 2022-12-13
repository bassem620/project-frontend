import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
    user: user? user : null,
    isError: false,
    isLoading: false,
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

// Change Password
export const changePassword = createAsyncThunk(
    "user/changePassword",
    async (userData, thunkAPI) => {
        thunkAPI.dispatch(reset());
        try{
            const token = thunkAPI.getState().user.user.token;
            return await userService.changePassword(token, userData);
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
)

// Edit Account
export const editAccount = createAsyncThunk(
    "user/editAccount",
    async (user, thunkAPI)=> {
        thunkAPI.dispatch(reset());
        try{
            const token = thunkAPI.getState().user.user.token;
            return await userService.editAccount(token,user);
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
)

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
                state.isError = false;
                state.isSuccess = false;
                state.message = "";
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
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
                state.isError = false;
                state.isSuccess = false;
                state.message = "";
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            // Logout
            .addCase(logout.pending, state => {
                state.isLoading = true;
                state.isError = false;
                state.isSuccess = false;
                state.message = "";
            })
            .addCase(logout.fulfilled, state => {
                state.user = null;
                state.isLoading = false;
            })
            .addCase(logout.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            // Change Password
            .addCase(changePassword.pending, state => {
                state.isLoading = true;
                state.isError = false;
                state.isSuccess = false;
                state.message = "";
            })
            .addCase(changePassword.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.message = action.payload.message;
            })
            .addCase(changePassword.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.payload;
            })
            // Edit Account
            .addCase(editAccount.pending, state => {
                state.isLoading = true;
                state.isError = false;
                state.message = "";
            })
            .addCase(editAccount.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
            })
            .addCase(editAccount.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
    }
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;