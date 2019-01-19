import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';
import ProfilePicture from './ProfilePicture';


class Profile extends Component {
    constructor(props){
        super(props);
        this.state={

        }
this.handleChange= this.handleChange.bind(this);
        this.handleSave =this.handleSave.bind(this);
    }
    handleSave(event){

    }
handleChange(event){
    this.setState({[event.target.name]: event.target.value});
}

    render(){

        return(
            <div>
                <div className="container">

                    <div className="login-form">
                        <div className="main-div">
                            <ProfilePicture></ProfilePicture>
                            <div className="form-group">
                                <input onChange={this.handleChange} type="text" className="form-control"
                                       name="firstname" placeholder="FirstName"/>
                            </div>
                            <div className="form-group">
                                <input onChange={this.handleChange} type="text" className="form-control"
                                       name="lastname" placeholder="LastName"/>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" rows="10" onChange={this.handleChange}
                                          name="aboutme" placeholder="Aboutme"></textarea>
                            </div>
                            <div className="form-group">
                                <input onChange={this.handleChange} type="text" className="form-control"
                                       name="mycity" placeholder="MyCity"/>
                            </div>
                            <div className="form-group">
                                <input onChange={this.handleChange} type="text" className="form-control"
                                       name="school" placeholder="School"/>
                            </div>
                            <div className="form-group">
                            <input onChange={this.handleChange} type="text" className="form-control"
                                   name="hometown" placeholder="HomeTown"/>
                        </div><div className="form-group">
                            <input onChange={this.handleChange} type="text" className="form-control"
                                   name="languages" placeholder="Languages"/>
                        </div>
                            <div className="form-group">
                                <select className="form-control" id="sel1" name={"gender"}>
                                    <option value="" disabled selected>Gender</option>
                                    <option value={"Female"}>Female</option>
                                    <option value={"Male"}>Male</option>
                                    <option value={"Other"}>Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input onChange={this.handleChange} type="text" className="form-control"
                                       name="lastname" placeholder="LastName"/>
                            </div>



                            <button onClick={this.handleSave} className="btn btn-save">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;