import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {userregistrationdata} from './registrationMiddleware';

interface User {}

interface PreRegDataItem {}

interface MyState {
  loading: boolean;
  error: string;
  preRegData: PreRegDataItem[];
  registrationdata: PreRegDataItem[];
  user: User;
}

const initialState: MyState = {
  loading: false,
  error: '',
  preRegData: [],
  registrationdata: [],
  user: {},
};

const mySlice = createSlice({
  name: 'Reducer',
  initialState,
  reducers: {
    setLoading: state => {
      state.loading = true;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    setPreRegData: (state, action: PayloadAction<PreRegDataItem[]>) => {
      state.loading = false;
      state.preRegData = action.payload;
      state.registrationdata = action.payload;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(userregistrationdata.pending, state => {
      state.loading = true;
    });
    builder.addCase(
      userregistrationdata.fulfilled,
      (state, action: PayloadAction<PreRegDataItem[]>) => {
        state.loading = false;
        // state.preRegData = action.payload;
        //state.preRegData = [...state.preRegData, ...action.payload];
        state.registrationdata = [...state.registrationdata, ...action.payload];
      },
    );
    builder.addCase(userregistrationdata.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload
        ? action.payload.toString()
        : 'An error occurred';
    });
  },
});

export const {setLoading, setError, setPreRegData, setUser} = mySlice.actions;
export default mySlice.reducer;
