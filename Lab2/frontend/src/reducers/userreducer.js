import _ from "lodash";
import { SIGNUP_USER,LOGIN_USER ,GET_USER_PROFILE,UPDATE_USER_PROFILE,UPDATE_PROFILE_PIC,GET_PROFILE_PIC,LOGOUT_USER} from "../actions/UserAction";


//Reducer listening to different action types
//initial state is {}
const initialstate={
    user:{},
    isLoggedIn:false,
    userprofilepic:""
}
export default function(state = initialstate, action) {
    switch (action.type) {
        case SIGNUP_USER:
            console.log(action.payload);
            return _.mapKeys(action.payload.user, "User");
        case LOGIN_USER:
            console.log(action.payload);
            return {
                ...state,
                isLoggedIn:action.payload.isLoggerdIn,
                user:action.payload.user
            }
        case LOGOUT_USER:
            console.log(action.payload);
            return {
                isLoggedIn:action.payload.isLoggerdIn,
            }
        case UPDATE_USER_PROFILE:
            console.log(action.payload);
            return {
                ...state,
                user:action.payload.user
            }
        case UPDATE_PROFILE_PIC:
            return{
                ...state,
                userprofilepic:action.payload.userprofilepic
            }
        case GET_PROFILE_PIC:
            return{
                ...state,
                userprofilepic:action.payload.userprofilepic
            }


        default:
            return state;
    }
}
