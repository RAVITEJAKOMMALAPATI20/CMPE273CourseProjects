import React, { Component } from 'react';
import Header from '../LandingPage/Header';
import '../../css/App.css';
import {Link} from 'react-router-dom';
import axios from "axios";
import cookie from 'react-cookies';
import {Redirect} from 'react-router';

const loginbutton={

}
class TravelerLogin extends Component{
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:"",
            authFlag:false
        }

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.loginTraveler =this.loginTraveler.bind(this);
    }


    handleChange(event){
        this.setState({[event.target.name]: event.target.value});
    }


    handleSubmit(event){
        if(event.target.name=="traveler-login"){
            this.loginTraveler();
        }
    }

    loginTraveler(){
        alert(this.state.username);
        let data={
            username:this.state.username,
            password:this.state.password
        }
        let loginURL="http://localhost:3000/users/login";
        axios.post(loginURL,data).then(response=>{
console.log(response);
            if(response.status===200){
                this.setState({authFlag:true});
            }else {
                this.setState({authFlag:false});
            }
        });
    }
    render(){


        let redirectVar = null;
        if(this.state.authFlag==true){
            redirectVar=<Redirect to="/Home"/>
        }
        return(
            <div>
                {redirectVar}
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <h4 style={{textAlign: 'center'}}>Log in to HomeAway</h4>
                        <h6 style={{textAlign: 'center'}}>Need anaccount ? <Link to="/SignUp">Sign Up</Link></h6>
                        <div className="login-form">
                            <div className="main-div">
                                <div className="panel">
                                    <h2>Traveler Login</h2>
                                    <p>Please enter your username and password</p>
                                </div>

                                <div className="form-group">
                                    <input onChange={this.handleChange} type="text" className="form-control"
                                           name="username" placeholder="Username"/>
                                </div>
                                <div className="form-group">
                                    <input onChange={this.handleChange} type="password"
                                           className="form-control" name="password" placeholder="Password"/>
                                </div>
                                <button onClick={this.handleSubmit} className="btn btn-primary" name="traveler-login">Login</button>
                            </div>

                        </div>
                    </div>

                    <div className="col-sm-2"></div>



                </div>
            </div>


        );
    }

}
export default TravelerLogin;