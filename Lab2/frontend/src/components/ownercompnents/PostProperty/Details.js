import React, { Component } from 'react';
import  {connect} from 'react-redux';
import Input from "muicss/lib/react/input";
import Option from "muicss/lib/react/option";
import Select from "muicss/lib/react/select";
import {updatedetails} from "../../../actions/BrowserPropertyAction";

class Details extends Component{

    constructor(props){
        super(props);
        let property =this.props.property;
        let details={};
        if(property.details==undefined){
            details={
                heading:"",
                propertydescription:"",
                propertytype:"",
                accomodation:"",
                bedrooms:"",
                bathrooms:""
            }
        }else {
            details=property.details
        }

        this.state=details;
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        if(event.target.name=="owner-login"){
            this.loginOwner();
        }
    }
    handleChange(event){
        this.setState({[event.target.name]: event.target.value});
    }
    componentWillUnmount(){
        console.log("componentWillUnmount got called=================="+this.state.heading);
        this.props.updatedetails(this.state);
    }
render(){
    let options =["Apartment", "Barn", "Bed &amp; Breakfast", "Boat",
        "Bungalow", "Cabin", "Campground", "CastleChalet",
        "Chateau Country House", "Condo", "Corporate Apartment", "Cottage",
        "Estate", "Farmhouse", "Guest House", "Hostel", "Hotel", "Hotel Suites",
        "House", "House Boat", "Lodge", "Mill", "Mobile Home", "Recreational Vehicle",
        "Resort", "Studio", "Tower", "Townhome", "Villa", "Yacht"];
    return(

        <div className="container">
            <div className="panel proppanel panel-default">
                <h5>Describe your property</h5><hr></hr>
                <div className="panel-body">

                    <div className={"row"}>
                        <div className={"col-sm-2"}></div>
                        <div className={"col-sm-8"}>
                            <Input  onChange={this.handleChange} name="heading" label="Heading" floatingLabel={true} defaultValue={this.state.heading}  />
                            <Input  onChange={this.handleChange} name="propertydescription" label="PropertyDescription" floatingLabel={true}  defaultValue={this.state.propertydescription} />
                            <Select  onChange={this.handleChange}  name={"propertytype"} label="PropertyType"defaultValue={"Select"}defaultValue={this.state.propertytype}>
                                {options.map(val=>{
                                    return (<Option value={val} label={val}>{val}</Option>);
                                })}
                            </Select>
                            <Input  onChange={this.handleChange} name="bedrooms" type={"number"}label="Bedrooms" min="1" max="10" floatingLabel={true}  defaultValue={this.state.bedrooms} />
                            <Input  onChange={this.handleChange} name="accomodation" type={"number"} label="Accomodation" min="1" max="10"floatingLabel={true}  defaultValue={this.state.accomodation} />
                            <Input  onChange={this.handleChange} name="bathrooms" type={"number"}label="Bathrooms" min="1" max="10" floatingLabel={true}  defaultValue={this.state.bathrooms} />
                        </div>
                        <div className={"col-sm-2"}></div>
                    </div>




                    <hr></hr>
                    <div className={"logfooter"}>
                        <div className={"col-sm-2"}></div>
                        <div className={"col-sm-8"}>
                            <ul className="pager">
                                <li className="previous"><a>Previous</a></li>
                                <li className="next"><a>Next</a></li>
                            </ul>
                        </div>
                        <div className={"col-sm-2"}></div>
                    </div>


                </div>
            </div>
        </div>
    );

}
}
function mapStateToProps(state){
    console.log(state.properties.property);
    return{
        property:state.properties.property
    }
}
export default connect(mapStateToProps,{updatedetails})(Details);
