import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import connect from "react-redux/es/connect/connect";
import {gettrips} from "../../actions/UserPropertiesAction";




class ChildHeader extends Component {


    componentWillMount(){
        let data ={
            username:this.props.user.username
        }
this.props.gettrips(data);
    }
    render() {

        return (
            <div className="profileheader">
                <div className="row">
                    <div className={"col-sm-1"}></div>
                    <div className={"col-sm-5  parenttab"}>
                        <Link to="/traveler/th/inbox"><div className={"col-sm-3 childtab"}>Inbox</div></Link>
                        <Link to="/traveler/th/booking"><div className={"col-sm-3 childtab"}>My Trips</div></Link>
                        <Link to="/traveler/profile/edit"><div className={"col-sm-3 childtab"}>Profile</div></Link>
                        <Link to="/traveler/account/settings"><div className={"col-sm-3 childtab"}>Account</div></Link>
                    </div>
                    <div className={"col-sm-6"}></div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        user:state.user.user
    }
}
export default connect(mapStateToProps,{gettrips})(ChildHeader);