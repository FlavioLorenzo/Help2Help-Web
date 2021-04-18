import organizationReducer from "./organizationReducer";
import eventReducer from "./eventReducer";
import navigationReducer from "./navigationReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    organization: organizationReducer,
    event: eventReducer,
    navigation: navigationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
