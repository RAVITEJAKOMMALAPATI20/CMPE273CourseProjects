import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { graphql, compose } from 'react-apollo';

import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

import {connect} from  'react-redux';
import {signUpUser} from '../../actions/UserAction'
import Input from "muicss/lib/react/input";

import {signinuserMutation} from '../../mutation/mutation'

class OwnerSignUp extends Component {


    constructor(props){
        super(props);
        this.state={
            firstname:"",
            lastname:"",
            username:"",
            password:"",
            usertype:'owner'

        }
        this.handleChange =this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({[event.target.name]:event.target.value});
    }

    handleClick(){
        this.props.signinuserMutation({
            variables:{
                firstname:this.state.firstname,
                lastname:this.state.lastname,
                username:this.state.username,
                password:this.state.password,
                usertype:this.state.usertype
            }
        });
    }
    render() {
        return (
            <div className="usr-login">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3"></div>
                        <div className="col-sm-6">
                            <div className="logpanel">
                                <h4>Owner Sign up for HomeAway</h4>
                                <p>Already have an account? <Link to={"/user/Login"}>Login</Link></p>
                                <div className='logheader'>Account SignUp</div>
                                <hr></hr>
                                <div className='logbody'>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <Input onChange={this.handleChange} name="firstname" label="First Name" floatingLabel={true} />
                                        </div>
                                        <div className="col-lg-6">
                                            <Input onChange={this.handleChange} name="lastname" label="LastName" floatingLabel={true}  />
                                        </div>
                                    </div>
                                    <Input onChange={this.handleChange} name="username" label="User Name" floatingLabel={true}  />
                                    <Input onChange={this.handleChange} name="password" type ="password" label="Password" floatingLabel={true}  />
                                </div>
                                <div className='log-footer' onClick={this.handleClick.bind(this)}>SignUp</div>
                                <input type={"checkbox"}/><span>Keep me signed in</span>
                            </div>
                        </div>
                        <div className="col-sm-3"></div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        user: state.User
    }
}

export default compose(
    graphql(signinuserMutation, { name: "signinuserMutation" })
)(connect(mapStateToProps,{})(OwnerSignUp));