import { combineReducers } from "redux";
import { AuthPageReducer } from "../pages/AuthPage/reducer";
import AuthFormReducer from "../components/AuthForm/reducer";


export const RootReducer = combineReducers({
  authState: AuthPageReducer,
  authForm: AuthFormReducer
});