import React, { Component } from 'react';
import {Route,BrowserRouter,Link} from 'react-router-dom';
import { white, lightGreen100 } from 'material-ui/styles/colors';


class OwnerHome extends Component{

    constructor(props){
        super(props);
        this.state={
            properties:[]
        }


        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(name){

    }




    render(){
        return(  <BrowserRouter>
                <div>
<button><a href="/OwnerHome">Add Property </a></button>
                </div>
            </BrowserRouter>


        );
    }

}

export default OwnerHome;