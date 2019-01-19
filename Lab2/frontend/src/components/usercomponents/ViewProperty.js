import React, { Component } from 'react';
import {Route,BrowserRouter,Link} from 'react-router-dom';

import connect from "react-redux/es/connect/connect";
import {getproperty,bookproperty} from "../../actions/UserPropertiesAction";

class ViewProperty extends Component{

    constructor(props){
        super(props);
        this.state={
            propertyid:"",
            render:"",
            location:"",
            details:"",
            pricing:"",
            photos:"",
            availability:"",
            rentalrates:"",
            sublist:false
        }

        this.handleBookProperty=this.handleBookProperty.bind(this);
    }


     componentWillMount(){
         this.props.getproperty(this.props.match.params.propertyid);
    }




    handleBookProperty(){
 let data={
    property: this.props.property,
    user:this.props.user
        }
        this.props.bookproperty(data);
    }

    render(){
        console.log("I am State"+JSON.stringify(this.props.property));

        let location=null;
        let details = null;
if(this.props.property!==undefined){
    let local_location=this.props.property.location;
    let local_details=this.props.property.details;
    if(local_location!==undefined)
    location=(<div className={"viewbody"}>
        <div className={"row"}>
            <div className={"col-sm-6"}><h4>Country</h4></div>
            <div className={"col-sm-6"}>{local_location.country}</div>
        </div>

        <div className={"row"}>
            <div className={"col-sm-6"}><h4>State</h4></div>
            <div className={"col-sm-6"}>{local_location.state}</div>
        </div>

        <div className={"row"}>
            <div className={"col-sm-6"}><h4>City</h4></div>
            <div className={"col-sm-6"}>{local_location.city}</div>
        </div>

        <div className={"row"}>
            <div className={"col-sm-6"}><h4>Unit</h4></div>
            <div className={"col-sm-6"}>{local_location.unit}</div>
        </div>

        <div className={"row"}>
            <div className={"col-sm-6"}><h4>Street Address</h4></div>
            <div className={"col-sm-6"}>{local_location.streetaddress}</div>
        </div>

        <div className={"row"}>
            <div className={"col-sm-6"}><h4>ZipCode</h4></div>
            <div className={"col-sm-6"}>{local_location.zipcode}</div>
        </div>
        </div>);

    if(local_details!==undefined)
    details=(<div className={"viewbody"}>
        <div className={"row"}>
            <div className={"col-sm-6"}><h4>Heading</h4></div>
            <div className={"col-sm-6"}>{local_details.heading}</div>
        </div>

        <div className={"row"}>
            <div className={"col-sm-6"}><h4>Property Description</h4></div>
            <div className={"col-sm-6"}>{local_details.propertydescription}</div>
        </div>

        <div className={"row"}>
            <div className={"col-sm-6"}><h4>Property Type</h4></div>
            <div className={"col-sm-6"}>{local_details.propertytype}</div>
        </div>

        <div className={"row"}>
            <div className={"col-sm-6"}><h4>Accomodation</h4></div>
            <div className={"col-sm-6"}>{local_details.accomodation}</div>
        </div>

        <div className={"row"}>
            <div className={"col-sm-6"}><h4>Bed Rooms</h4></div>
            <div className={"col-sm-6"}>{local_details.bedrooms}</div>
        </div>

        <div className={"row"}>
            <div className={"col-sm-6"}><h4>Bath Rooms</h4></div>
            <div className={"col-sm-6"}>{local_details.bathrooms}</div>
        </div>
    </div>);


}
        return(
            <div className={"viewproperty"}>
                <h4 style={{textAlign:"center"}}>All you need to know about the Property</h4>
                <div className={"subheading"}>Location</div>
                {location}
                <div className={"subheading"}>Details</div>
                {details}
                <button className={"btn btn-primary"} onClick={this.handleBookProperty}>Book this Property</button>
            </div>

        );
    }

}

function mapStateToProps(state){
    console.log(JSON.stringify(state.userproperties.userproperty));
    let property=undefined;
if(state.userproperties.userproperty!==undefined){
    property=state.userproperties.userproperty;
}
    return{
        property:property,
        properties:state.userproperties.userproperties,
        user:state.user.user
    }
}
export default connect(mapStateToProps,{getproperty,bookproperty})(ViewProperty);