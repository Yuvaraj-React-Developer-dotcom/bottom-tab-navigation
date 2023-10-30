import {createAsyncThunk} from '@reduxjs/toolkit';
// import {USERDETAIL} from '../../../redux/actionType';
import {USERDETAIL} from '../../../redux/actionType';

export const userregistrationdata = createAsyncThunk(
  USERDETAIL,
  async (userregistrationdata: any) => {
    try {
      console.log(userregistrationdata, 'find user register datas');

      const response = userregistrationdata;
      return response;
    } catch (error) {
      throw error;
    }
  },
);
