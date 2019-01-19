import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ReactDOM from 'react-dom';
import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';
import connect from "react-redux/es/connect/connect";
import {loginUser,logoutUser} from "../../actions/UserAction";
import ProfilePicture from "./ProfilePicture";



class ParentHeader extends Component {

constructor(props){
    super(props);
    this.handlelogout =this.handlelogout.bind(this);
}

    handlelogout(){
        this.props.logoutUser();
    }

    render() {
        let profiledropDown =null;
        let profilepic =null;
        if(this.props.isLoggedIn==false){
            profiledropDown = (<div className={"col-sm-2 cusdropdown dropdown"}>
                <div className=" dropdown-toggle" data-toggle="dropdown">Login/SignUp</div>
                <div className="dropdown-menu">
                    <Link style={{ textDecoration: 'none' }}to="/user/login">
                        <div className={"childtab"}>Traveler Login</div>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/owner/login">
                        <div  className={"childtab"}>Owner Login</div>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/user/SignUp">
                        <div  className={"childtab"}>Traveller SignUp</div>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/owner/SignUp">
                        <div  className={"childtab"}>Owner SignUp</div>
                    </Link>
                </div>

            </div>);
        }
        if(this.props.isLoggedIn==true){
            profilepic=<ProfilePicture height={"40px"} width ={"40px"} editable={false}></ProfilePicture>
            profiledropDown = (<div className={"col-sm-3 cusdropdown dropdown"}>
                <div className=" dropdown-toggle" data-toggle="dropdown">{this.props.user.username}</div>
                <div className="dropdown-menu">
                    <Link style={{ textDecoration: 'none' }}to="/traveler/th/inbox" ><div className={"dropdowntab"}>
                        <div className={"col-sm-1"}>
                            <span className="glyphicon glyphicon-envelope"></span>
                        </div>
                        <div className={"col-sm-3"}>
                            Inbox</div></div></Link>
                    <Link style={{ textDecoration: 'none' }}to="/traveler/th/booking"><div className={"dropdowntab"}>
                        <div className={"col-sm-1"}>
                            <span className="glyphicon glyphicon-briefcase"></span>
                        </div>
                        <div className={"col-sm-7"}>
                            My Trips</div></div></Link>
                    <Link style={{ textDecoration: 'none' }}to="/traveler/profile/edit">
                        <div className={"dropdowntab"}>
                            <div className={"col-sm-1"}>
                            <span className="glyphicon glyphicon-user"></span>
                            </div>
                            <div className={"col-sm-3"}>
                                Profile</div></div>
                    </Link>
                    <Link style={{ textDecoration: 'none' }}to="/traveler/account/settings"><div className={"dropdowntab"}>
                        <div className={"col-sm-1"}>
                            <span className="glyphicon glyphicon-cog"></span>
                        </div>
                        <div className={"col-sm-3"}>
                            Account</div></div></Link>
                    <hr></hr>
                    <Link style={{ textDecoration: 'none' }} to="/" ><div className={"dropdowntab"}>
                        <div className={"col-sm-1"}>
                            <span className="glyphicon glyphicon-log-out"></span>
                        </div>
                        <div className={"col-sm-3"} onClick={this.handlelogout}>
                            Logout</div></div></Link>
                </div>
            </div>);
        }
        let homebuttonclick = null;
        if(this.props.usertype=='user'){
            homebuttonclick ="/traveler/home"
        }else if(this.props.usertype=='owner'){
            homebuttonclick ="/owner/home";
        }else{
            homebuttonclick ="/";
        }
            return (
            <div className="parentheader row">
                <div className={"col-sm-4"}><Link to={homebuttonclick}><img   src= { require('../../images/logo.svg') } alt="Home Away"  /></Link></div>
                    <div className={"col-sm-3"}></div>
                    <div className={"col-sm-5  parenttab"}>
                        <div className={"row"}>
                        <div className={"col-sm-6"}></div>
                        <div className={"col-sm-1"}>{profilepic}</div>
                        <div className={"col-sm-1"}></div>
                        {profiledropDown}
                        <div className={"col-sm-2"}></div>
                        </div>
                    </div>
            </div>
        );
    }
}
function mapStateToProps(state){
    return{
        isLoggedIn: state.user.isLoggedIn,
        user:state.user.user

    }
}
export default connect(mapStateToProps,{logoutUser})(ParentHeader);