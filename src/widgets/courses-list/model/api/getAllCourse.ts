import { requestActions } from 'shared/libs/slices';
import axios from 'axios';
import { API_URL, GET_ALL_COURSES_ENDPOINT } from 'shared/constants/baseURL';
import { coursesActions } from 'widgets/courses-list/model/slice';
import { CoursesType } from 'widgets/courses-list/model/types';

export const getAllCourse = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(requestActions.fetchRequest());
    const response = await axios.get<CoursesType[]>(API_URL + GET_ALL_COURSES_ENDPOINT, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Cross-Origin-Opener-Policy': 'same-origin'
      }
    });

    const arrGroup: CoursesType[] = []
    const resultResponse = response.data;

    resultResponse.map(course => {
      course.is_grouped && arrGroup.push(course)
    });
    localStorage.setItem('grouped_course', JSON.stringify(arrGroup))

    dispatch(coursesActions.getAllCourses(resultResponse));
    dispatch(requestActions.successRequest());
  } catch (e) {
    console.log(e);
  }
};
