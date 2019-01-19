import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import '../css/App.css';
import OwnerLogin from './Login/OwnerLogin';
import TravelerLogin from './Login/TravelerLogin';
import OwnerMain from './OwnerHome/OwnerMain';
import SignUp from './SignUp/SignUp';
import Home from './Home/Home'
import OwnerHome from './OwnerHome/OwnerHome'
import Header from './LandingPage/Header';
import Profile from './Profile/Profile';
import ProfilePicture from './Profile/ProfilePicture';
import Provider from "react-redux/es/components/Provider";

class Main extends Component{
    constructor(){
        super();
    }

    render(){
//Ok

        return(
                <div>
                    {/*Render Different Component based on Route*/}
                    <Route path="/" component={Header}/>
                    <Route path="/OwnerLogin" component={OwnerLogins}/>
                    <Route path="/TravelerLogin" component={TravelerLogin}/>
                    <Route path="/SignUp" component={SignUp}/>
                    <Route path="/Home" component={Home}/>
                    <Route path="/OwnerHome" component={OwnerHome}/>
                    <Route path="/OwnerMain" component={OwnerMain}/>
                    <Route path="/Traveler/Profile" component={Profile}/>
                    <Route path="/Profile/ProfilePicture" component={ProfilePicture}/>
                </div>


        );
    }

}
export default Main;