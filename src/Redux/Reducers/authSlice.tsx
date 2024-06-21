import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface AuthState {
  token: string | null;
  user:object,
 filter:object

  

}

const initialState: AuthState = {
  token: null,
  user:{},
  filter:{
    provider:'',
    location:'',
    startDate:null,
    endDate:null
  },

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
    setFilterData(state,action: PayloadAction<{ location:string, provider: string; startDate: Date; endDate: Date }>){
      state.filter = { ...state.filter, ...action.payload };
    }

  },

});

export const { setUser, setToken,setFilterData } = userSlice.actions;
export const authReducer = userSlice.reducer;
