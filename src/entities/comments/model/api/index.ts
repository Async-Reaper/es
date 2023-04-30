import { API_URL, GET_ALL_COMMENTS_ENDPOINT } from 'shared/constants/baseURL';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';
import { CommentType } from 'entities/comments/model/types';
import {commentsActions} from "../slice";

export const getAllComments = createAsyncThunk<
CommentType[],
number | undefined,
ThunkConfig<string>
>(
  'comment/getAllComment/:id',
  async (idResource, thunkApi) => {
    const { extra, rejectWithValue, dispatch } = thunkApi;

    try {
      const response = await extra.api.get(`${API_URL + GET_ALL_COMMENTS_ENDPOINT + idResource}/comments/`);
      dispatch(commentsActions.getComments(response.data))
      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error');
    }
  },
);
