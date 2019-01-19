import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";
import {saveproperty,updaterentalrates} from "../../../actions/BrowserPropertyAction";
import Input from "muicss/lib/react/input";

class RentalRates extends Component{
    constructor(props){
        super(props);
        let property =this.props.property;
        let rentalrates={};
        if(property.rentalrates==undefined){
            rentalrates={
                heading:"",
            }
        }else {
            rentalrates=property.rentalrates
        }

        this.state=rentalrates;
        this.handleClick=this.handleClick.bind(this);
        this.handleSave=this.handleSave.bind(this);
    }

    handleClick(name,e){
        let data={
            name:"RentalRates",
            value:this.state
        }
        this.props.changeState(data);
        this.props.clickPrevNext(name);
        // this.setState({[name]: true});
    }
    componentWillUnmount(){
        console.log("componentWillUnmount got called=================="+this.state);
        this.props.updaterentalrates(this.state);
    }
handleSave(){
        let property={
            ...this.props.property,
            rentalrates:this.state
        }
        let properties =this.props.properties.map(val=>{
            if(val.propertyid==property.propertyid){
                return property;
            }
            return val;
        });
        console.log("In Rental Rates"+property)
        this.props.saveproperty(property,this.props.username,properties);
}
    render(){
        return(
            <div className={"container"}>
            <div className="panel proppanel panel-default">
            <h5 className={"prop-pan-head"}>How much do you want to charge?</h5>
        <p>We recommend starting with a low price to get a few bookings and earn some initial guest reviews. You can update your rates at any time.</p>
        <hr></hr>

        <div className="panel-body">
            <div>
                <div className={"col-sm-2"}></div>
                <div className={"col-sm-8"}>
                    <Input  name="pricing" label="Pricing" floatingLabel={true}   />
                </div>
                <div className={"col-sm-2"}></div>
            </div>

            <div className={"logfooter"}>
                <div className={"col-sm-2"}></div>
                <div className={"col-sm-8"}>
                    <ul className="pager">
                        <div className={"logfooter"}>
                            <button onClick={this.handleSave} className="btn btn-save">Save</button>
                        </div>
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
        properties:state.properties.properties,
        username:state.user.user.username,
        property:state.properties.property
    }
}
export default connect(mapStateToProps,{saveproperty,updaterentalrates})(RentalRates);