import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ChildHeader from '../usercomponents/ChildHeader';
import Input from "muicss/lib/react/input";
import connect from "react-redux/es/connect/connect";



class UserAccount extends Component {

constructor(props){
    super(props);
    this.handleChange=this.handleChange.bind(this);
    this.handleSave =this.handleSave.bind(this);
}
    handleChange(){

    }
    handleSave(){

    }
    render() {
        return (
            <div className="usraccount">
                <ChildHeader/>

                <div className={"acc-panel1"}>

                    <div className="container">
                        <div className="panel profilepanel panel-default">
                            <div className="panel-body"><h5>Change your email address</h5><hr></hr></div>
                            <div className="panel-body">
                                <div className={"row"}>
                                    <div className={"col-sm-3"}></div>
                                    <div className={"col-sm-6"}>
                                        <Input onChange={this.handleChange} name="username" label="Username" floatingLabel={true} defaultValue={this.props.user.username}  />
                                    </div>
                                </div>
                                <div className={"logfooter"}>
                                    <div className={"col-sm-4"}></div>
                                    <button onClick={this.handleSave} className="btn acc-btn-save">Save</button>
                                </div>
                                </div>
                        </div>
                    </div>

                </div>


                <div className={"acc-panel2"}>
                    <div className="container">
                        <div className="panel profilepanel panel-default">
                            <div className="panel-body"><h5>Change your password</h5><hr></hr></div>
                            <div className="panel-body">
                                <div className={"row"}>
                                    <div className={"col-sm-3"}></div>
                                <div className={"col-sm-6"}>
                                    <Input onChange={this.handleChange} type="password"name="currentpassword" label="Current Password" floatingLabel={true}  />
                                </div>
                                </div>
                                <div className={"row"}>
                                    <div className={"col-sm-3"}></div>
                                <div className={"col-sm-6"}>
                                    <Input onChange={this.handleChange} type="password"name="newpassword" label="New Password" floatingLabel={true}  />
                                </div>
                                </div>
                                <div className={"row"}>
                                    <div className={"col-sm-3"}></div>
                                <div className={"col-sm-6"}>
                                    <Input onChange={this.handleChange} type="password"name="confirmnewpassword" label="Confirm New Password" floatingLabel={true}  />
                                </div>
                                </div>
                                <div className={"logfooter"}>
                                    <div className={"col-sm-4"}></div>
                                    <button onClick={this.handleSave} className="btn acc-btn-save">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <div className={"acc-panel3"}>
                    <div className="container">
                        <div className="panel profilepanel panel-default">
                            <div className="panel-body"><h5>Profile visibility</h5><hr></hr></div>
                            <div className="panel-body">
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}
function mapStateToProps(state){
    return{
        userprofilepic:state.user.userprofilepic,
        user:state.user.user
    }
}
export default connect(mapStateToProps,{})(UserAccount);