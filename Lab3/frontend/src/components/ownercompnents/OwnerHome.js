import React, { Component } from 'react';
import {Route,BrowserRouter,Link} from 'react-router-dom';
import Pricing from './PostProperty/Pricing';
import Location from './PostProperty/Location';
import Photos from './PostProperty/Photos';
import Details from './PostProperty/Details';
import RentalRates from './PostProperty/RentalRates';
import Availability from './PostProperty/Availability';
import Input from "muicss/lib/react/input";
import Property from '../comcomponents/Property'
import connect from "react-redux/es/connect/connect";
import {getproperties, createnewproperty} from "../../actions/PropertyAction";
import uniqid from 'uniqid';
import Pagination from "react-js-pagination";
import { Cell, Grid } from 'react-mdl';
import ParentHeader from "../usercomponents/ParentHeader";


import {loginUser} from "../../actions/UserAction";
import {compose, graphql,withApollo} from "react-apollo";
import {getownerpropertiesQuery, loginuserQuery} from "../../queries/queries";

class OwnerHome extends Component{

    constructor(props){
        super(props);
        this.state={
            properties:this.props.properties,
            currentpage:1,
            propertiesperpage:5
        }

        this.handleClick=this.handleClick.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handlePageChange=this.handlePageChange.bind(this);
this.handlePaginationClick=this.handlePaginationClick.bind(this);
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
    }

    handlePaginationClick(pageNumber) {
        this.setState({currentpage: pageNumber});
    }
async componentWillMount(){
        if(this.props.properties==undefined||this.props.properties.length==0){
        let data = {username: this.props.user.username};
        }


    let data=  await this.props.client.query({
        query:getownerpropertiesQuery,
        variables:{
            username:this.props.user.username,
        }
    })
    console.log(JSON.stringify(data.data))
    this.props.getproperties(data.data.getownerproperties);
}
    handleChange(event){

    }
    handleClick(event){
        console.log(event.target.name);
if(event.target.name=="createnewproperty"){
    console.log(event.target.name);
    let data = {
        username:this.props.user.username,
        property:{
        propertyid:uniqid("homeaway"+ "_"+this.props.user.username )
        }
};
    this.props.createnewproperty(data);
}
    }


    render(){
        let propertiescomponents =null;
        let { properties, currentpage, propertiesperpage } = this.state;
        const indexOfLastProperty = currentpage * propertiesperpage;
        const indexOfFirstProperty = indexOfLastProperty - propertiesperpage;
        let currentTodos = [];
        let pagination= null;

           if(this.props.properties!=undefined){
               currentTodos = this.props.properties.slice(indexOfFirstProperty, indexOfLastProperty);
               propertiescomponents =currentTodos.map(property=> (<Property property ={property}></Property>));
               pagination = (<Pagination
                   activePage={this.state.currentpage}
                   itemsCountPerPage={5}
                   totalItemsCount={this.props.properties.length}
                   pageRangeDisplayed={5}
                   onChange={this.handlePaginationClick}
               />);

           }


        return(
            <div className={"container"}>
                <div className={"createnewproperty"}>
                    <button onClick={this.handleClick} className="btn btn-save" name={"createnewproperty"}>CreateNewProperty</button>
                    <Link to="/owner/bookedproperties"><div className={"col-sm-3 childtab"}>GetBooked Properties</div></Link>
                    <br/>
                </div>
                <Grid>
                    <Cell col={12}> {propertiescomponents}</Cell>
                </Grid>
                <div className={"row"}>
                    <div className={"col-sm-4"}/>
                    <div className={"col-sm-4"}> {pagination}</div>
                    <div className={"col-sm-4"}/>
                </div>
              </div>
             );
         }
}

function mapStateToProps(state){
    return{
        properties:state.properties.properties,
        user:state.user.user
    }
}
export default compose(graphql(getownerpropertiesQuery, { name: "getownerpropertiesQuery" }),connect(mapStateToProps,{getproperties,createnewproperty}))(withApollo(OwnerHome));

