import organizationReducer from "./organizationReducer";
import eventReducer from "./eventReducer";
import layoutReducer from "./layoutReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    organization: organizationReducer,
    event: eventReducer,
    layout: layoutReducer,
});

export default rootReducer;
