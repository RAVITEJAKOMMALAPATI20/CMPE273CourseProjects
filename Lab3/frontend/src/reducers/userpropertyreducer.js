
import {
    GET_PROPERTIES,
    VIEW_PROPERTY,
    BOOK_PROPERTY,
    GET_PROPERTY, GET_TRIPS
} from "../actions/UserPropertiesAction";



const initialstate={
    userproperties:[],
    userproperty:{},
    usertrips:[],
}


export default function(state = initialstate, action) {
    switch (action.type) {
        case GET_PROPERTIES:
            console.log("Inside user property Reducer GET_PROPERTIES:"+JSON.stringify(action.payload));
            return {
                ...state,
                userproperties:action.payload.properties,
            }
        case VIEW_PROPERTY:
            console.log("Inside user property Reducer VIEW_PROPERTY:"+JSON.stringify(action.payload));

            return {
                ...state,
                userproperty:action.payload.property,
            }
        case BOOK_PROPERTY:
            console.log("Inside user property Reducer BOOK_PROPERTY:"+JSON.stringify(action.payload));
            return {
                ...state,
                usertrips:action.payload.bookedproperties,
            }
        case GET_PROPERTY:
            let propertyarray =state.userproperties.filter(property=>property.propertyid==action.payload.propertyid);
            let property =propertyarray[0];
            return{
                ...state,
                userproperty:property
            }
        case GET_TRIPS:
            return{
                ...state,
                usertrips:action.payload.usertrips
            }
        default:
            return state;
    }
}