import React, { Component } from 'react';
import axios from "axios";
import {Redirect} from "react-router";
import {Link} from "react-router-dom";

class OwnerLogin extends Component{
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:"",
            authFlag:false
        }

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.loginOwner =this.loginOwner.bind(this);
    }


    handleChange(event){
        this.setState({[event.target.name]: event.target.value});
    }


    handleSubmit(event){
        if(event.target.name=="owner-login"){
            this.loginOwner();
        }
    }

    loginOwner(){
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
            redirectVar=<Redirect to="/OwnerMain"/>
        }
        return(
            <div>
                {redirectVar}
                <div className="container">


                        <div className="login-form">
                            <div className="main-div">
                                <div className="panel">
                                    <h2>Owner Login</h2>
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
                                <button onClick={this.handleSubmit} className="btn btn-primary" name="owner-login">Login</button>
                            </div>

                        </div>

                </div>
            </div>


        );
    }

}
export default OwnerLogin;