import React, { Component } from 'react';
import UserProperty from '../comcomponents/UserProperty'
import connect from "react-redux/es/connect/connect";
import {getproperties,getproperty} from "../../actions/UserPropertiesAction";
import uniqid from 'uniqid';
import Pagination from "react-js-pagination";


class UserPropertyDisplay extends Component{

    constructor(props){
        super(props);
        this.state={
            properties:this.props.properties,
            currentpage:1,
            propertiesperpage:10
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

    handleChange(event){

    }
    handleClick(event){

        console.log(event);
            this.props.getproperty(event);
    }


    render(){
        let propertiescomponents =null;
        let { properties, currentpage, propertiesperpage } = this.state;
        const indexOfLastProperty = currentpage * propertiesperpage;
        const indexOfFirstProperty = indexOfLastProperty - propertiesperpage;
        let currentTodos = null;
        let pagination= null;
console.log(this.props.properties+"Hi I am Here")
        if(this.props.properties!=undefined && this.props.properties.length>0){
            currentTodos = this.props.properties.slice(indexOfFirstProperty, indexOfLastProperty);
            propertiescomponents =currentTodos.filter(property=>property.isavailable!=false).map(property=> (<UserProperty property ={property} ></UserProperty>));
            pagination = (<Pagination
                activePage={this.state.currentpage}
                itemsCountPerPage={10}
                totalItemsCount={this.props.properties.length}
                pageRangeDisplayed={5}
                onChange={this.handlePaginationClick}
            />);

        }


        return(
            <div className={"container"}>
                  {propertiescomponents}

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
    console.log(state.userproperties.userproperties+"HIii ");
    return{
        properties:state.userproperties.userproperties,
        user:state.user.user
    }
}
export default connect(mapStateToProps,{getproperties})(UserPropertyDisplay);