import { handleActions } from "redux-actions";
import { changeAuthorizationState, changeUserId} from "./actions";

const initialState = {
  isAuthenticated: JSON.parse(localStorage.getItem('auth')) || false,
  userId: Number(localStorage.getItem('userId')) || null
}

export const AuthPageReducer = handleActions(
  {
    [changeAuthorizationState]: (state, { payload: isAuthenticated}) => ({
      ...state,
      isAuthenticated
    }),
    [changeUserId]: (state, { payload: userId}) => ({
      ...state,
      userId
    })
  },
  initialState
)