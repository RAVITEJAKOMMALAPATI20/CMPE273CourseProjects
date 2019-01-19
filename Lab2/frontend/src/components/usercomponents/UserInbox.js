import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ChildHeader from '../usercomponents/ChildHeader';



class UserInbox extends Component {
    render() {
        return (
            <div className="usr-profile">
<ChildHeader></ChildHeader>
            </div>
        );
    }
}
export default UserInbox;