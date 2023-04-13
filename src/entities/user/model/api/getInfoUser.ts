import axios from "axios";
import { API_URL, USER_INFO_ENDPOINT } from "shared/libs/constants/baseURL";
import { requestActions } from "shared/libs/slices";
import { userActions } from "../slice";
import { UserType } from "../types";
import { setCookie } from "../../../../shared/libs/cookie";

export const getInfoUser = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(requestActions.fetchRequest);
    const request = await axios.get<UserType>(API_URL + USER_INFO_ENDPOINT, {
      headers: {
        Token: JSON.parse(localStorage.getItem("token") || ""),
        Signature: JSON.parse(localStorage.getItem("signature") || ""),
      },
    });
    const infoUser = request.data;
    dispatch(requestActions.successRequest);
    dispatch(userActions.getUserInfo(infoUser));

    setCookie("full_name", infoUser.full_name);
    setCookie("is_teacher", infoUser.is_teacher);
  } catch (error) {
    console.log(error);
  }
};
