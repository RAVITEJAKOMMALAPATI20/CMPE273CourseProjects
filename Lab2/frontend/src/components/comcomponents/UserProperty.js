import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import connect from "react-redux/es/connect/connect";



class UserProperty extends Component {

    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.handleSave =this.handleSave.bind(this);
        this.handleClick =this.handleClick.bind(this);
    }
    handleChange(event){

    }
    handleSave(event){

    }
    handleClick(event){

    }
    render() {
console.log(JSON.stringify(this.props.property));
        let details=null;
        if(this.props.property.details!=undefined){
            details = this.props.property.details.propertydescription;
        }else {
            details ="Need To add detail Discription of the property";
        }
        return (
            <div className={"propertycardbody"} onClick={this.handleClick}>



                            <div className={"image"}>
                                <img  src= {require('../../images/homepic.jpeg')} alt="Smiley face" height="100px" width="100%" /></div>
                            <div className={"description"}>

                                <h5>{this.props.property.propertyid}</h5>
                                <h5>{details}</h5>

                            </div>
                <Link style={{ textDecoration: 'none' }}to={{pathname:"/user/viewproperty/"+this.props.property.propertyid}}>
                            <div className={"viewpropertybutton"}>View</div>


                </Link>
            </div>

        );
    }
}


function mapStateToProps(state){
    return{
        user:state.user.user
    }
}
export default connect(mapStateToProps,{})(UserProperty);