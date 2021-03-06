import axios from "axios";
export const GET_PROPERTIES ="GET_PROPERTIES";
export const UPDATE_PROPERTY ="UPDATE_PROPERTY";
export const CREATE_NEW_PROPERTY ="CREATE_NEW_PROPERTY";
export const DELETE_PROPERTY ="DELETE_PROPERTY";
export const SAVE_PROPERTY ="SAVE_PROPERTY";



const ROOT_URL = "http://ec2-34-220-14-203.us-west-2.compute.amazonaws.com/api";


export  const getproperties = async (data) =>{

let properties=data.map(ownerproperty=>ownerproperty.property);
    return {
        type: GET_PROPERTIES,
        payload: {properties:properties}
    };
}
export  const updateproperty = async (data) =>{

    const response = await axios.post(`${ROOT_URL}/ownerproperty/updateproperty`, data);
    return {
        type: UPDATE_PROPERTY,
        payload: {property:response.data.property}
    };
}
export  const createnewproperty = async (data) =>{
console.log(data)
    const response = await axios.post(`${ROOT_URL}/ownerproperty/createnewproperty`, data);
    return {
        type: CREATE_NEW_PROPERTY,
        payload: {properties:response.data.properties}
    };
}
export  const deleteproperty = async (data) =>{

    const response = await axios.post(`${ROOT_URL}/ownerproperty/deleteproperty`, data);
    return {
        type: DELETE_PROPERTY,
        payload: {}
    };
}

export  const saveproperty = async (data) =>{

    const response = await axios.post(`${ROOT_URL}/ownerproperty/saveproperty`, data);
    return {
        type: SAVE_PROPERTY,
        payload: {}
    };
}