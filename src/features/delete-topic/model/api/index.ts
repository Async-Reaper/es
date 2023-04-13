import {requestActions} from 'shared/libs/slices';
import axios from 'axios';
import {API_URL, DELETE_TOPIC_ENDPOINT} from 'shared/libs/constants/baseURL';
import {courseActions} from "../../../../pages/course-page/model/slice";

export const deleteTopic = (id: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(requestActions.fetchRequest());
    const response = await axios.delete(API_URL + DELETE_TOPIC_ENDPOINT + id, {
      headers: {
        Token: JSON.parse(localStorage.getItem('token') || ''),
        Signature: JSON.parse(localStorage.getItem('signature') || ''),
      },
    });
    dispatch(courseActions.deleteTopic(id))
    dispatch(requestActions.successRequest());
  } catch (e) {
    dispatch(requestActions.errorRequest());
  }
};
