import axios from "axios";
import {GET_BROWSER_PROPERTY} from "./BrowserPropertyAction";
export const GET_PROPERTIES ="GET_PROPERTIES";

export const VIEW_PROPERTY ="GET_PROPERTIES";
export const BOOK_PROPERTY ="GET_PROPERTIES";
export const GET_PROPERTY="GET_PROPERTY";
export const GET_TRIPS ="GET_TRIPS";

const ROOT_URL = "http://rhomeaway.xyz/api";



export  const getproperties = async (data) =>{
console.log(JSON.stringify(data)+"In Action")
    const response = await axios.get(`${ROOT_URL}/users/getproperties`, {
        params: data
    });
    return {
        type: GET_PROPERTIES,
        payload: {properties:response.data.properties}
    };
}

export  const getproperty = async (propertyid) =>{
    console.log(propertyid+"In Action");
    return {
        type: GET_PROPERTY,
        payload: {propertyid:propertyid}
    };
}


export  const gettrips = async (data) =>{
    console.log(data+"In Action");
    console.log(JSON.stringify(data)+"In Action")
    const response = await axios.get(`${ROOT_URL}/users/gettrips`, {
        params: data
    });
    return {
        type: GET_TRIPS,
        payload: {usertrips:response.data.usertrips}
    };
}



export  const bookproperty = async (data) =>{
    console.log(JSON.stringify(data)+"In Action")
    const response = await axios.post(`${ROOT_URL}/users/bookproperty`,data);
    return {
        type: BOOK_PROPERTY,
        payload: {bookedproperties:response.data.bookedproperties}
    };
}