import React, { Component } from 'react';
import  {connect} from 'react-redux';
import axios from "axios";

class LoactionForm extends Component{

    constructor(props){
        super(props);
        this.state={
            country:"",
            streetaddress:"",
            unit:"",
            city:"",
            state:"",
            zipcode:""
        }

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    savePropert(){
    let data= {
        address:{
            country: this.state.country,
        streetaddress: this.state.streetaddress,
        unit:this.state.unit,
        city:this.state.city,
        state:this.state.state,
        zipcode:this.state.zipcode,
            }
    }
    let savepropertyURL="http://localhost:3000/ownerproperty/saveproperty";
    axios.post(savepropertyURL,data).then(response=>{
        console.log(response);
        if(response.status===200){
            this.setState({authFlag:true});
        }else {
            this.setState({authFlag:false});
        }
    });
}
    handleSubmit(event){
        if(event.target.name=="save"){
            this.savePropert();
        }
    }
    handleChange(event){
        this.setState({[event.target.name]: event.target.value});
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

                <div className="login-form">
                    <div className="main-div">

                        <div className="form-group">
                            <input onChange={this.handleChange} type="text" className="form-control"
                                   name="country" placeholder="Country"/>
                        </div>
                        <div className="form-group">
                            <input onChange={this.handleChange} type="text" className="form-control"
                                   name="streetaddress" placeholder="Street Address"/>
                        </div>
                        <div className="form-group">
                            <input onChange={this.handleChange} type="text" className="form-control"
                                   name="unit" placeholder="Unit,Suit,Building,Etc"/>
                        </div>
                        <div className="form-group">
                            <input onChange={this.handleChange} type="text" className="form-control"
                                   name="city" placeholder="City"/>
                        </div>
                        <div className="form-group">
                            <input onChange={this.handleChange} type="text" className="form-control"
                                   name="state" placeholder="State"/>
                        </div>
                        <div className="form-group">
                            <input onChange={this.handleChange} type="text" className="form-control"
                                   name="zipcode" placeholder="Zipcode"/>
                        </div>
                        <button onClick={this.handleSubmit} name={'save'}>Save</button>

                    </div>

                </div>
            </div>
        );

    }
}

export default LoactionForm;
