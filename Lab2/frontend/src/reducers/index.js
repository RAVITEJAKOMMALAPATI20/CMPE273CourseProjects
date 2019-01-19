import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import UserReducer from "./userreducer";
import PropertyReducer from "./propertyreducer";
import UserPropertyReducer from "./userpropertyreducer"
const rootReducer = combineReducers({
    user: UserReducer,
    properties:PropertyReducer,
    userproperties:UserPropertyReducer,
    form: formReducer
});

export default rootReducer;
