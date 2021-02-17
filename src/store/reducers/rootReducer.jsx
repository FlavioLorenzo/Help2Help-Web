import organizationReducer from "./organizationReducer";
import eventReducer from "./eventReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    organization: organizationReducer,
    event: eventReducer,
});

export default rootReducer;
