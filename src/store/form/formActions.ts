import {
  FETCH_FORM_VALUES,
  FETCH_FORM_VALUES_SUCCESS,
  FETCH_FORM_VALUES_FAILED
} from "./formConstants";
import { BASE_URL } from "@config/index";

export const fetchValues = () => (dispatch: any) => {
  dispatch({
    type: FETCH_FORM_VALUES
  });
  fetch(`${BASE_URL}values`)
    .then(r => r.json())
    .then(result => {
      setTimeout(() => {
        dispatch({
          type: FETCH_FORM_VALUES_SUCCESS,
          payload: result
        });
      }, 500);
    });
};
