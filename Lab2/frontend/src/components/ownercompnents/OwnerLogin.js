import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import connect from "react-redux/es/connect/connect";
import {loginUser} from '../../actions/UserAction'
import { Redirect } from 'react-router-dom';
import Input from "muicss/lib/react/input";


class OwnerLogin extends Component {
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:"",
            usertype:"user"
        }
        this.handleChange =this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({[event.target.name]:event.target.value});
    }

    handleClick(){
        this.props.loginUser(this.state);
    }

    render() {
        if(this.props.isLoggedIn==true){
            return  <Redirect to='/owner/home' />
        }
        return (
            <div className="usr-login">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                            <div className="logpanel">
                                <h4 >Owner Log in to HomeAway</h4>
                                <p >Need an account? <Link to={"/user/SignUp"}>Sign Up</Link></p>
                                <div className='logheader'>Account Login</div>
                                <hr></hr>
                                <div className='logbody'>
                                    <Input onChange={this.handleChange} name="username" label="User Name" floatingLabel={true} />
                                    <Input onChange={this.handleChange} type="password" name="password" label="Password" floatingLabel={true}  />
                                </div>
                                <div className='log-footer' onClick={this.handleClick.bind(this)}>Login</div>
                                <input type={"checkbox"}/><span>Keep me signed in</span>
                            </div>
                        </div>
                        <div className="col-sm-4"></div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        isLoggedIn: state.user.isLoggedIn
    }
}
export default connect(mapStateToProps,{loginUser})(OwnerLogin);