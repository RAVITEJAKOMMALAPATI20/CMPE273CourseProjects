import {CREATE_NEW_PROPERTY,DELETE_PROPERTY,UPDATE_PROPERTY,GET_PROPERTIES} from "../actions/PropertyAction";
import {
    GET_BROWSER_PROPERTY,
    UPDATE_LOCATION,
    UPDATE_DETAILS,
    UPDATE_RENTALRATES,
    SAVE_PROPERTY
} from "../actions/BrowserPropertyAction";
import _ from "lodash";



const initialstate={
    properties:[],
    property:{}
}


export default function(state = initialstate, action) {
    switch (action.type) {
        case CREATE_NEW_PROPERTY:
            console.log(action.payload);
            //_.mapKeys(action.payload.properties, "User");
            return {
                ...state,
                properties:action.payload.properties,
            }
        case GET_PROPERTIES:
            console.log(action.payload);
            return {
                ...state,
                properties:action.payload.properties,
            }
        case UPDATE_PROPERTY:
            console.log(action.payload);
            return {
                ...state,
                properties:action.payload.properties
            }
        case DELETE_PROPERTY:
            return{
                ...state,
                properties:action.payload.properties
            }
        case GET_BROWSER_PROPERTY:
            let propertyarray =state.properties.filter(property=>property.propertyid==action.payload.propertyid);
            let property =propertyarray[0];
            return{
                ...state,
                property:property
            }
        case UPDATE_LOCATION:
            console.log("In BrowserPropertyReducer  UPDATE_LOCATION"+action.payload.location);
            return{
                ...state,
                property:{...state.property,
                    location:action.payload.location
                }
            }
        case UPDATE_DETAILS:
            console.log("In BrowserPropertyReducer  UPDATE_DETAILS"+action.payload.details);
            return{
                ...state,
                property:{...state.property,
                    details:action.payload.details
                }
            }

        case UPDATE_RENTALRATES:
            console.log("In BrowserPropertyReducer  UPDATE_DETAILS"+action.payload.rentalrates);
            return{
                ...state,
                property:{...state.property,
                    rentalrates:action.payload.rentalrates
                }
            }
        case SAVE_PROPERTY:
            console.log("In BrowserPropertyReducer  UPDATE_DETAILS"+action.payload.property);
            state.properties=state.properties.map(property=>{
                if(property.propertyid==action.payload.property.propertyid){
                    return action.payload.property;
                }
                return property;
            });
            console.log("properties"+state)
            return{
                ...state,
                property:action.payload.property
                }
        default:
            return state;
    }
}