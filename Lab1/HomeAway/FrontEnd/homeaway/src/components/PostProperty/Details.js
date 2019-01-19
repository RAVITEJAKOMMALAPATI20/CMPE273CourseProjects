import React, { Component } from 'react';
import  {connect} from 'react-redux';

class Details extends Component{

    constructor(props){
        super(props);
        this.state={
            heading:"",
            propertydescription:"",
            propertyType:"",
            bedrooms:"",
            bathrooms:"",
            accomodation:"",
            authFlag:false
        }

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
                    <div className="panel">
                        <h2>Describe your property</h2>
                        <p>Start out with a descriptive headline and a detailed summary of your property.</p>
                    </div>

                    <div className="form-group">
                        <input onChange={this.handleChange} type="text" className="form-control"
                               name="heading" placeholder="Heading"/>
                        <span className="help-block" id="headline__help">(minimum 20) 80 characters left</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="comment">Property desription:</label>
                        <textarea className="form-control" rows="29" name={"propertydescription"}></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="propertytype">Property Type:</label>
                        <select className="form-control" name={"propertyType"}>
                            {options.map(val=>{
                                return (<option value={val}>{val} </option>);
                            })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="bedrooms">Bedrooms:</label>
                        <input type="number" name="bedrooms" value={this.props.bedrooms} min="1" max="10" className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="accomodation">Accomodation:</label>
                        <input type="number" name="accomodation" min="1" max="10" className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="bathrooms">Bathrooms:</label>
                        <input type="number" name="bathrooms" min="1" max="10" className="form-control"></input>
                    </div>
                    <ul className="pager">
                        <li className="previous"><a>Previous</a></li>
                        <li className="next"><a>Next</a></li>
                    </ul>

                </div>

            </div>
        </div>
    );

}
}
const mapStateToProps=(state)=>{
    console.log(state);
    return {bedrooms:state.bedrooms};
}
export default connect(mapStateToProps)(Details);
