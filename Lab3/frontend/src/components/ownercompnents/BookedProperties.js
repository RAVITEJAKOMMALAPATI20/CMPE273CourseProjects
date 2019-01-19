import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {graphql, compose, withApollo} from 'react-apollo';

import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

import {connect} from  'react-redux';
import {loginUser, signUpUser} from '../../actions/UserAction'
import Input from "muicss/lib/react/input";

import {signinuserMutation} from '../../mutation/mutation'
import {getbookedpropertiesownerQuery, loginuserQuery} from "../../queries/queries";

class BookedProperties extends Component {


    constructor(props){
        super(props);
        this.state={
            properties:[]

        }
        this.handleChange =this.handleChange.bind(this);
    }
   async componentWillMount(){


        let data=  await this.props.client.query({
            query:getbookedpropertiesownerQuery,
            variables:{
                owner:this.props.user.username
            }
        })

       let properties=data.data.getbookedpropertiesowner;
        this.setState({
            properties:properties
        })

    }
    handleChange(event){
        this.setState({[event.target.name]:event.target.value});
    }


    render() {
        let booked=null;
        booked=this.state.properties.map(property=><tr className="info">
            <td>{property.propertyid}</td>
            <td>{property.username}</td>
            <td>{property.startdate}</td>
            <td>{property.enddate}</td>
        </tr>)
        return (
            <div className="container">

                <table className="table">
                    <thead>
                    <tr className="success">
                        <th>PrpertID</th>
                        <th>User Who Booked Property</th>
                        <th>From Date</th>
                        <th>To Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {booked}

                    </tbody>
                </table>
            </div>

        );
    }
}

function mapStateToProps(state){
    return{
        user: state.user.user
    }
}

export default compose(graphql(getbookedpropertiesownerQuery, { name: "getbookedpropertiesownerQuery" }),connect(mapStateToProps,{loginUser}))(withApollo(BookedProperties));