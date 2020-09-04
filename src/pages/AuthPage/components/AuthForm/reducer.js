import { handleActions } from "redux-actions";
import { changeLoginForm, changePasswordForm } from "./actions";

const initialState = {
  currentLogin: '',
  currentPass: ''
}

const AuthFormReducer = handleActions(
  {
    [changeLoginForm]: (state, { payload: currentLogin }) => ({
      ...state,
      currentLogin
    }), 

    [changePasswordForm]: (state, { payload: currentPass }) => ({
      ...state,
      currentPass
    }), 
  },
  initialState
)

export default AuthFormReducer;