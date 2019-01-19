import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ChildHeader from '../usercomponents/ChildHeader';
import UserTripDisplay from './UserTripDisplay'

class UserMyTrips extends Component {
    render() {
        return (
            <div className="usr-profile">
                <ChildHeader/>
                <UserTripDisplay/>
            </div>
        );
    }
}
export default UserMyTrips;