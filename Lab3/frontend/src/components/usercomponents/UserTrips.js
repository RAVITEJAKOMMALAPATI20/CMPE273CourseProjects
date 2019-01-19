import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {graphql, compose, withApollo} from 'react-apollo';

import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

import {connect} from  'react-redux';
import {loginUser, signUpUser} from '../../actions/UserAction'
import Input from "muicss/lib/react/input";

import {signinuserMutation} from '../../mutation/mutation'
import { gettripsuserQuery} from "../../queries/queries";

class UserTrips extends Component {


    constructor(props){
        super(props);
        this.state={
            properties:[]

        }
        this.handleChange =this.handleChange.bind(this);
    }
    async componentWillMount(){


        let data=  await this.props.client.query({
            query:gettripsuserQuery,
            variables:{
                username:"aeiou"
            }
        })

        let properties=data.data.gettripsuser;
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
            <td>{property.property.owner}</td>
            <td>{property.startdate}</td>
            <td>{property.enddate}</td>
            <td>{property.property.location.city}</td>
        </tr>)
        return (
            <div className="container">

                <table className="table">
                    <thead>
                    <tr className="success">
                        <th>PrpertID</th>
                        <th>Owner of Property</th>
                        <th>From Date</th>
                        <th>To Date</th>
                        <th>City</th>
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

export default compose(graphql(gettripsuserQuery, { name: "gettripsuserQuery" }),connect(mapStateToProps,{loginUser}))(withApollo(UserTrips));