import { AskQuestionType } from 'features/ask-questions/model/types';
import { API_URL, ASK_QUESTIONS_ENDPOINT } from 'shared/constants/baseURL';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';

export const fetchAskQuestions = createAsyncThunk<
void,
AskQuestionType,
ThunkConfig<string>
>(
  'comment/addComment',
  async (data, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    try {
      const response = await extra.api.post(API_URL + ASK_QUESTIONS_ENDPOINT, data);
      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
