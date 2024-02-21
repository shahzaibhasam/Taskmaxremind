import { createSlice } from '@reduxjs/toolkit';

const gernalSlice = createSlice(
    {
        name: 'gernal',
        initialState: {
            loader: false
        },
        reducers: {
            setLoader: (state, action) => {
                console.log('action.payload ===', action.payload)
                state.loader = action.payload;
            },
        },
    }
);

export const { setLoader } = gernalSlice.actions;
export const gernalReducer = gernalSlice.reducer;
