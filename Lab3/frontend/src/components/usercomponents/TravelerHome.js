import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import connect from "react-redux/es/connect/connect";
import { Redirect } from 'react-router-dom';
import ChildHeader from './ChildHeader';

import ParentHeader from './ParentHeader';
import UserSearch from "./UserSearch";

class TravelerHome extends Component {

    constructor(props){
        super(props);
        this.state={
            properties:this.props.properties,
            currentpage:1,
            propertiesperpage:5
        }

    }


    render() {

        return (
            <div className="usr-search">
                <div>Please search for the property</div>
                <UserSearch/>
            </div>
        );
    }
}




function mapStateToProps(state){
    return{
        properties:state.userproperties.userproperties,
        user:state.user.user
    }
}
export default connect(mapStateToProps,{})(TravelerHome);