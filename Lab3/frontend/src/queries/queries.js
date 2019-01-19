import {gql} from 'apollo-boost';

const loginuserQuery=gql
    `
        query($username:String,$password:String){
            loginuser(username:$username,password:$password){
            id
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

const getownerpropertiesQuery=gql
    `
        query($username:String){
            getownerproperties(username:$username){
                propertyid
                    property{
                        propertyid
                        location{
                            city
                            country
                            streetaddress
                            unit
                            zipcode
                            state
                        }
                        details{
                            heading
                            propertydescription
                            propertytype
                            bedrooms
                            accomodation
                            bathrooms
                        }
                    }
             }
    }
    
    `;


const getbookedpropertiesownerQuery=gql
    `
        query($owner:String){
            getbookedpropertiesowner(owner:$owner){
                propertyid
                startdate
                enddate
                username 
             }
    }
    
    `;


const gettripsuserQuery=gql
    `
        query($username:String){
            gettripsuser(username:$username){
                propertyid
                startdate
                enddate
                property{
                location{
                city
                } 
                owner
             }
             }
    }
    
    `;


const getsearchedpropertiesquery=gql
    `
        query($city:String){
            searchproperty(city:$city){
                propertyid
                    property{
                        propertyid
                        location{
                            city
                            country
                            streetaddress
                            unit
                            zipcode
                            state
                        }
                        details{
                            heading
                            propertydescription
                            propertytype
                            bedrooms
                            accomodation
                            bathrooms
                        }
                    }
             }
    }
    
    `;

export {  loginuserQuery,getownerpropertiesQuery ,getbookedpropertiesownerQuery,getsearchedpropertiesquery,gettripsuserQuery};