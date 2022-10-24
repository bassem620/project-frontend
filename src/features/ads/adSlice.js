import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import adService from "./adService";

const initialState = {
    ads: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
}

// Create New Ad
export const createAd = createAsyncThunk(
    "ads/create",
    async(adData, thunkAPI) => {
        try{
            const token = thunkAPI.getState().user.user.token;
            return await adService.createAd(token, adData);
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Get Ads
export const getAds = createAsyncThunk(
    "ads/all",
    async (_, thunkAPI) => {
        try{
            return await adService.getAds();
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Get Ad
export const getAd = createAsyncThunk(
    "ads/one",
    async (id, thunkAPI) => {
        try{
            const token = thunkAPI.getState().user.user.token;
            return await adService.getAd(token, id); 
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Get User Ads
export const getUserAds = createAsyncThunk(
    "ads/userAds",
    async(_, thunkAPI) => {
        try{
            const token = thunkAPI.getState().user.user.token;
            return await adService.getUserAds(token); 
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Delete Ad
export const deleteUserAd = createAsyncThunk(
    "ads/delete",
    async(id, thunkAPI) => {
        try{
            const token = thunkAPI.getState().user.user.token;
            return await adService.deleteUserAd(token, id); 
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const adSlice = createSlice({
    name: "ad",
    initialState,
    reducers: {
        reset: state => initialState,
    },
    extraReducers: builder => {
        builder
        .addCase(createAd.pending, state => {
            state.isLoading = true;
        })
        .addCase(createAd.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.ads.push(action.payload);
        })
        .addCase(createAd.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        .addCase(getAds.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getAds.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.ads = action.payload;
        })
        .addCase(getAds.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        .addCase(getAd.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getAd.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.ads = action.payload;
        })
        .addCase(getAd.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        .addCase(getUserAds.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getUserAds.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.ads = action.payload;
        })
        .addCase(getUserAds.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        .addCase(deleteUserAd.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(deleteUserAd.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.ads = state.ads.filter(
                (ad) => ad._id !== action.payload.id
            );
        })
        .addCase(deleteUserAd.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });
    }
});

export const {reset} = adSlice.actions;
export default adSlice.reducer;