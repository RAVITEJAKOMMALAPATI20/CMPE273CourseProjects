import React, { Component } from 'react';
import UserLogin from '../usercomponents/UserLogin';
import OwnerDasboard from '../ownercompnents/OwnerDasboard';
import ParentHeader from '../usercomponents/ParentHeader';
import {Route,BrowserRouter,Link} from 'react-router-dom';

class OwnerRoutes extends Component{
    constructor(){
        super();
    }

    render(){


        return(
            <div className={"maindiv"}>
                {/*Render Different Component based on Route*/}
jjiiiiiiini
                <BrowserRouter>
                <Route path="/postproperty/dashboard" component={OwnerDasboard}/>
                </BrowserRouter>

            </div>


        );
    }

}
export default OwnerRoutes;