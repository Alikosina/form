import {
  FETCH_FORM_VALUES,
  FETCH_FORM_VALUES_SUCCESS,
  FETCH_FORM_VALUES_FAILED
} from "./formConstants";
import { FormStateModel } from "./models";

const initialState: FormStateModel = {
  loading: true,
  error: null,
  data: {
    firstName: "",
    lastName: "",
    middleName: ""
  }
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_FORM_VALUES:
      return { ...state, loading: true };
    case FETCH_FORM_VALUES_SUCCESS:
      return { ...state, loading: false, data: action.payload };
  }
  return state;
};
