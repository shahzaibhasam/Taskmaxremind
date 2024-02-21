import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface AuthState {
  token: string | null;
  user:object,
  products:  object[];
  

}

const initialState: AuthState = {
  token: null,
  user:{},
  products: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser:(state, action: PayloadAction<object>) => {
     
          state.user = action.payload;
        },
    
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    addProduct: (state, action: PayloadAction<object>) => {
      if (state.products === null) {
        state.products = [];
      }
      state.products.push(action.payload);
    },
  },

});

export const { setUser, setToken,addProduct } = userSlice.actions;
export const authReducer = userSlice.reducer;
