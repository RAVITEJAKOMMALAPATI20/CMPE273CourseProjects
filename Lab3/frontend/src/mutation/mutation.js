
import { gql } from 'apollo-boost';

const signinuserMutation = gql
    `
    mutation($firstname:String,$lastname:String,$username:String,$password:String,$usertype:String) {
        signinuser(firstname: $firstname, lastname: $lastname, username: $username,password: $password,usertype:$usertype){
            firstname
            username
        }
    }
`;




const updateuserMutation = gql
    `
    mutation(
    $id:String,
    $firstname:String,
            $lastname:String,
            $aboutme:String,
            $mycity:String,
            $school:String,
            $hometown:String,
            $languages:String,
            $gender:String,
            $phonenumber:String) {
        updateuser(
            id:$id
            firstname:$firstname,
            lastname:$lastname,
            aboutme:$aboutme,
            mycity:$mycity,
            school:$school,
            hometown:$hometown,
            languages:$languages,
            gender:$gender,
            phonenumber:$phonenumber){
            username
            password
            firstname
            lastname
            aboutme
            mycity
            school
            hometown
            languages
            gender
            phonenumber
        }
    }
`;

export {signinuserMutation,updateuserMutation};