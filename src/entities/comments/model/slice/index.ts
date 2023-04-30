import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllComments } from 'entities/comments/model/api';
import { CommentSchema, CommentType } from 'entities/comments/model/types';

const initialState: CommentSchema = {
  data: [],
  isLoading: false,
  error: undefined,
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    getComments(state, action: PayloadAction<CommentType[]>) {
      state.data = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllComments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllComments.fulfilled, (state, action: PayloadAction<CommentType[]>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getAllComments.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: commentsActions } = commentsSlice;
export const { reducer: commentsReducer } = commentsSlice;
