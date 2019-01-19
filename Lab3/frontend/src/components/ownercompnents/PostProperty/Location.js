import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Input from "muicss/lib/react/input";
import connect from "react-redux/es/connect/connect";
import {updatelocation} from "../../../actions/BrowserPropertyAction";


class Location extends Component{
constructor(props){
    super(props);
    let property =this.props.property;
    let location={};
    if(property.location==undefined){
        location={
            country:"",
            streetaddress:"",
            unit:"",
            city:"",
            state:"",
            zipcode:""
        }
    }else {
        location=property.location
    }


    this.state=location
    this.handleChange= this.handleChange.bind(this);
    //this.handleSave = this.handleSave.bind(this);
}


    componentWillUnmount(){
    console.log("componentWillUnmount got called");
        this.props.updatelocation(this.state);
    }
    handleChange(event){
        this.setState({[event.target.name]:event.target.value});
    }

    render(){
        return(
                <div className="container">
                    <div className="panel proppanel panel-default">
                        <div className="panel-body"><h5>Verify the location of your rental</h5><hr></hr></div>
                        <div className="panel-body propform">
                                    <Input onChange={this.handleChange} label="Country" floatingLabel={true}type="text" name="country" defaultValue={this.state.country}/>
                                    <Input onChange={this.handleChange} label="Streetaddress" floatingLabel={true}type="text" name="streetaddress" defaultValue={this.state.streetaddress} />
                                    <Input onChange={this.handleChange} label="Unit" floatingLabel={true}type="text" name="unit" defaultValue={this.state.unit}/>
                                    <Input onChange={this.handleChange} label="City" floatingLabel={true}type="text" name="city" defaultValue={this.state.city} />
                                    <Input onChange={this.handleChange} label="State" floatingLabel={true}type="text" name="state" defaultValue={this.state.state}/>
                                    <Input onChange={this.handleChange} label="Zipcode" floatingLabel={true}type="text" name="zipcode" defaultValue={this.state.zipcode}/>
                            <div className={"logfooter"}>
                                <div className={"col-sm-2"}></div>
                                <div className={"col-sm-8"}>
                                <ul className="pager">
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
export default  connect(mapStateToProps,{updatelocation})(Location);
