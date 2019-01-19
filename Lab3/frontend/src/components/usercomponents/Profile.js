import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import ProfilePicture from './ProfilePicture';
import connect from "react-redux/es/connect/connect";
import {getUserProfile} from "../../actions/UserAction";
import {updateUserProfile} from "../../actions/UserAction";

import ChildHeader from '../usercomponents/ChildHeader';
import ReactDOM from 'react-dom';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Select from 'muicss/lib/react/select';
import Option from 'muicss/lib/react/option';

import { updateuserMutation} from '../../mutation/mutation'
import {compose, graphql} from "react-apollo";
class Profile extends Component {
    constructor(props){
        super(props);
        this.state={...this.props.user};
        this.handleChange= this.handleChange.bind(this);
        this.handleSave =this.handleSave.bind(this);
    }
    componentWillMount(){
        //this.setState(this.props.user);
        //this.props.getUserProfile(this.props.user);
    }
    async handleSave(event){

       let data=await this.props.updateuserMutation({
            variables:{
                id:this.state.id,
                firstname:this.state.firstname,
                lastname:this.state.lastname,
                username:this.state.username,
                aboutme:this.state.aboutme,
                mycity:this.state.mycity,
                school:this.state.school,
                hometown:this.state.hometown,
                languages:this.state.languages,
                gender:this.state.gender,
                phonenumber:this.state.phonenumber
            }
        });
       console.log(JSON.stringify(data.data));
        this.props.updateUserProfile(data.data.updateuser);
    }
    handleChange(event){
        this.setState({[event.target.name]: event.target.value});
    }

    render(){
        return(
            <div className="usr-login maindiv">
                <ChildHeader/>
            <div className="container">
            <div className="row ">
            <div className="col-sm-3"></div>
        <div className="col-sm-6">
            <div className="logpanel">
                <div className='logheader'>
                <ProfilePicture height={"100px"} width ={"100px"} editable={true}></ProfilePicture>
                <h4 style={{textstyle:"bold"}}>{this.props.user.firstname} {this.props.user.lastname}</h4>
                </div>
                <hr></hr>
                <div className='logbody '>
                    <h4 style={{textstyle:"bold"}}>Profile Information</h4>

                    <Input onChange={this.handleChange} name="firstname" label="FirstName" floatingLabel={true} defaultValue={this.props.user.firstname} />
                    <Input onChange={this.handleChange} name="lastname" label="LastName" floatingLabel={true} defaultValue={this.props.user.lastname} />

                    <Textarea label="Aboutme" floatingLabel={true} name="aboutme"  onChange={this.handleChange} defaultValue={this.props.user.aboutme}/>
                    <div className={"row"}>
                        <div className={"col-sm-8"}>
                            <Input onChange={this.handleChange} name="mycity" label="MyCity" floatingLabel={true} defaultValue={this.props.user.mycity} />
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"col-sm-8"}>
                            <Input onChange={this.handleChange} name="school" label="School" floatingLabel={true} defaultValue={this.props.user.school} />
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"col-sm-8"}>
                            <Input onChange={this.handleChange} name="hometown" label="HomeTown" floatingLabel={true} defaultValue={this.props.user.hometown} />
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"col-sm-8"}>
                            <Input onChange={this.handleChange} name="languages" label="Languages" floatingLabel={true} defaultValue={this.props.user.languages} />
                        </div>
                    </div>

                        <Select  onChange={this.handleChange}  name={"gender"} label="Gender"defaultValue={this.props.user.gender}>
                            <Option value={"Female"} label={"Female"}></Option>
                            <Option value={"Male"} label={"Male"}>Male</Option>
                            <Option value={"Other"} label={"Other"}>Other</Option>
                        </Select>

                    <div className={"row"}>
                        <div className={"col-sm-8"}>
                    <Input onChange={this.handleChange} name="phonenumber" label="Phone Number" floatingLabel={true} defaultValue={this.props.user.phonenumber} />
                        </div>
                    </div>
                </div>
                <div className={"logfooter"}>
                <button onClick={this.handleSave} className="btn btn-save">Save</button>
                </div>
            </div>
        </div>
        <div className="col-sm-3"></div>
    </div>
    </div>
    </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state.user.user);
    return{
        user:state.user.user
    }
}
export default compose(
    graphql(updateuserMutation, { name: "updateuserMutation" })
)(connect(mapStateToProps,{updateUserProfile})(Profile));


