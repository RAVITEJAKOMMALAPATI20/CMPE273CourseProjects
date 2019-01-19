import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';





class SignUp extends Component{
    constructor(props){
        super(props);
        this.state={
            firstname:"",
            lastname:"",
            email:"",
            password:"",
            authFlag:false
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.newuserSignUp=this.newuserSignUp.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value});
    }
    handleSubmit(event){
        if(event.target.name=="signup-submit"){
            this.newuserSignUp();
        }

    }
    newuserSignUp =()=>{
        let data={
            firstname:this.state.firstname,
            lastname:this.state.lastname,
            email:this.state.email,
            password:this.state.password
        };
        console.log("Inside SignUp newuserSignUp and data = "+JSON.stringify(data));
        let signupURL="http://localhost:3000/users/signup";
        axios.post(signupURL,data).then(response=>{
            if(response.status===200){
                this.setState({authFlag:true});
            }else {
                this.setState({authFlag:false});
            }

        });
    }
    render(){

        return(

                <div className="container">
                            <h4 style={{textAlign: 'center'}}>Sign up for HomeAway</h4>
                            <h6 style={{textAlign: 'center'}}>Already have an account? ? <Link to="/TravelerLogin">Log in</Link></h6>
                            <div className="login-form">
                                <div className="main-div">
                                    <div className="row">
                                    <div className="form-group col-md-6">
                                        <input onChange={this.handleChange} type="text" className="form-control"
                                               name="firstname" placeholder="FirstName" required="true"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input onChange={this.handleChange} type="text" className="form-control"
                                               name="lastname" placeholder="LastName"/>
                                    </div>
                                    </div>
                                    <div className="form-group">
                                        <input onChange={this.handleChange} type="text" className="form-control"
                                               name="email" placeholder="Username"/>
                                    </div>
                                    <div className="form-group">
                                        <input onChange={this.handleChange} type="password"
                                               className="form-control" name="password" placeholder="Password"/>
                                    </div>
                                    <button onClick={this.handleSubmit} className="btn btn-primary" name="signup-submit" >Sign Me Up</button>
                                    <button   className="btn btn-primary">Log in with Facebook</button>
                                    <button   className="btn btn-primary">Log in with Google</button>
                                    <p>We don't post anything without your permission.</p>
                                    <p>By creating an account you are accepting our Terms and Conditions and Privacy Policy.</p>
                                </div>

                            </div>
                </div>



        );
    }

}
export default SignUp;