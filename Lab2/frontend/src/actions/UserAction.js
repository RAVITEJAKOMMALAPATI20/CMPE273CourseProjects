import axios from "axios";
import setAuthorizationToken from '../utils/setAuthorizationToken'

export const LOGIN_USER = "LOGIN_USER";
export const SIGNUP_USER = "SIGNUP_USER";
export const GET_USER_PROFILE ="GET_USER_PROFILE";
export const UPDATE_USER_PROFILE="UPDATE_USER_PROFILE";
export const UPDATE_PROFILE_PIC ="UPDATE_PROFILE_PIC";
export const GET_PROFILE_PIC ="GET_PROFILE_PIC";
export const UPLOAD_PROPERTY_PICS ="UPLOAD_PROPERTY_PICS";
export const GET_PROPERTY_PICS ="GET_PROPERTY_PICS";
export const LOGOUT_USER="LOGOUT_USER";

const ROOT_URL = "http://localhost:3000";

//target action
/*export function loginUsers(data) {
    let user ={};
    let isLoggerdIn =false;
    console.log("hiii"+data);
    //middleware call
    //receive response from backend
    const response = axios.post(`${ROOT_URL}/users/login`,data).then(res=>{
        console.log("Response",res.data.user);
        user =res.data.user;
        //isLoggerdIn=true;
    });
    return {
        type: LOGIN_USER,
        isLoggerdIn: isLoggerdIn
    };
}*/

export const  loginUser =async (data)=> {
    let isLoggerdIn = false;
       let response = await axios.post(`${ROOT_URL}/users/login`,data);
       if(response.status==200){
           isLoggerdIn =true;
            const token =response.data.token;
            console.log(token);
            localStorage.setItem('jwtToken',token);
            setAuthorizationToken(token);
       }
    return {
        type: LOGIN_USER,
        payload: {
            isLoggerdIn: isLoggerdIn,
            user:response.data.user
        }
    };
}


export const  logoutUser = ()=> {
    let isLoggerdIn = false;
    localStorage.setItem('jwtToken',undefined);
    return {
        type: LOGOUT_USER,
        payload: {
            isLoggerdIn: false,
        }
    };
}

export const signUpUser=async (data) =>{
    let user ={};
    const response = await axios.post(`${ROOT_URL}/users/signup`, data,{headers: {'content-type': 'application/json'}});
if(response.status==200){
    user =data;
}
    return {
        type: SIGNUP_USER,
        payload: user
    };
}

export const getUserProfile=async (data) =>{
    const response = await axios.get(`${ROOT_URL}/users/userprofile`, data);

    return {
        type: GET_USER_PROFILE,
        payload: {userprofile:response.data.userprofile}
    };
}


export const updateUserProfile=async (data) =>{
    const response = await axios.post(`${ROOT_URL}/users/updateuserprofile`, data);
    console.log(response.data.user)
    return {
        type: UPDATE_USER_PROFILE,
        payload: {user:response.data.user}
    };
}

export  const updateProfilePic = async (data) =>{

    const response = await axios.post(`${ROOT_URL}/users/profilepicUpload`, data,{headers: {'content-type': 'multipart/form-data'}});
    return {
        type: UPDATE_PROFILE_PIC,
        payload: {userprofilepic:response.data.profilepic}
    };
}
export const getprofilepic =async (data)=>{
    const response = await axios.get(`${ROOT_URL}/users/getprofilepic`,{
        params: data
    } );
    return {
        type: GET_PROFILE_PIC,
        payload: {userprofilepic:response.data.profilepic}
    };
}
export  const uploadPropertyPics = async (data) =>{

    const response = await axios.post(`${ROOT_URL}/ownerproperty/uploadpropertypics`, data,{headers: {'content-type': 'multipart/form-data'}});
   console.log(response.data.resdata.propertypics);
    return {
        type: UPLOAD_PROPERTY_PICS,
        payload: {
            propertypics:response.data.resdata.propertypics,
            data:data
        }
    };
}

export const getPropertyPics =async (data)=>{
    const response = await axios.get(`${ROOT_URL}/users/getprofilepic`,{
        params: data
    } );
    return {
        type: GET_PROPERTY_PICS,
        payload: {
            propertypics:response.data.profilepic,
            data:data
        }
    };
}