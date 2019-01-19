import axios from "axios";
export const GET_LOCATION ="GET_PROPERTIES";
export const UPDATE_LOCATION ="UPDATE_LOCATION";
export const UPDATE_DETAILS ="UPDATE_DETAILS";
export const SAVE_PROPERTY ="SAVE_PROPERTY";
export const UPDATE_RENTALRATES ="UPDATE_RENTALRATES";
export const GET_BROWSER_PROPERTY ="GET_BROWSER_PROPERTY";

const ROOT_URL = "http://rhomeaway.xyz/api";

export  const getbrowserproperty = async (propertyid) =>{
    console.log(propertyid+"In Action");
    return {
        type: GET_BROWSER_PROPERTY,
        payload: {propertyid:propertyid}
    };
}


export  const updatelocation = async (location) =>{
    console.log(location+"In Action");
    return {
        type: UPDATE_LOCATION,
        payload: {location:location}
    };
}

export  const updatedetails = async (details) =>{
    console.log(details+"In Action");
    return {
        type: UPDATE_DETAILS,
        payload: {details:details}
    };
}

export  const updaterentalrates = async (rentalrates) =>{
    console.log("In Browser Property Action saveproperty"+rentalrates);
    return {
        type: UPDATE_RENTALRATES,
        payload: {rentalrates:rentalrates}
    };
}
export  const saveproperty = async (property,username,properties) =>{
    console.log("In Browser Property Action saveproperty"+JSON.stringify(property));
    let data ={
        property:property,
        username:username,
        properties:properties
    }
    const response = await axios.post(`${ROOT_URL}/ownerproperty/saveproperty`, data,{headers: {'content-type': 'application/json'}});
    return {
        type: SAVE_PROPERTY,
        payload: {property:response.data.property,properties:response.data.properties}
    };
}