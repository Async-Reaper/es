import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CourseSchema, CourseType} from 'pages/course-page/model/types';

const initialState: CourseSchema = {};

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    getCourse(state, action: PayloadAction<CourseType>) {
      state.data = action.payload;
    },
    deleteTopic(state, action: PayloadAction<number>) {
      state?.data?.topics?.filter(topic => topic.id !== action.payload);
    }
  },
});

export const { actions: courseActions } = courseSlice;
export const { reducer: courseReducer } = courseSlice;
