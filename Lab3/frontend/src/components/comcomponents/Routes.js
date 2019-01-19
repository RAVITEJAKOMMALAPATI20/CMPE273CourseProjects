import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import UserLogin from '../usercomponents/UserLogin';
import SignUp from '../usercomponents/UserSignUp';
import Profile from '../usercomponents/Profile';
import UserAccount from '../usercomponents/UserAccount'
import UserInbox from '../usercomponents/UserInbox'
import UserMyTrips from '../usercomponents/UserMyTrips';
import ChildHeader from '../usercomponents/ChildHeader';
import TravelerHome from '../usercomponents/TravelerHome';
import ParentHeader from '../usercomponents/ParentHeader';
import OwnerRoutes from './OwnerRoutes';
import OwnerDasboard from '../ownercompnents/OwnerDasboard';
import OwnerHome from '../ownercompnents/OwnerHome';
import ViewProperty from '../usercomponents/ViewProperty';
import OwnerLogin from '../ownercompnents/OwnerLogin';
import OwnerSignUp from '../ownercompnents/OwnerSignUp';
import BookedProperties from '../ownercompnents/BookedProperties';
import Property from "./Property";

class Routes extends Component{

    constructor(){
        super();
    }

    render(){

        return(
            <div className={"maindiv"}>
                <ParentHeader></ParentHeader>
                <Route path="/user/login" component={UserLogin}/>
                <Route path="/owner/login" component={OwnerLogin}/>
                <Route path="/user/SignUp" component={SignUp}/>
                <Route path="/owner/SignUp" component={OwnerSignUp}/>
                <Route path="/traveler/profile/edit" component={Profile}></Route>
                <Route path="/traveler/home" component={TravelerHome}></Route>
                <Route path="/traveler/th/booking" component={UserMyTrips}></Route>
                <Route path="/traveler/th/inbox" component={UserInbox}></Route>
                <Route path="/traveler/account/settings" component={UserAccount}></Route>
                <Route path="/owner/postproperty/dashboard/:propertyid" component={OwnerDasboard}/>
                <Route path="/user/viewproperty/:propertyid" component={ViewProperty}/>
                <Route path="/owner/home" component={OwnerHome}/>
                <Route path="/owner/bookedproperties" component={BookedProperties}/>
            </div>
        );
    }

}
export default Routes;