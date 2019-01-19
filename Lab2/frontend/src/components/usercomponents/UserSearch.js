import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import connect from "react-redux/es/connect/connect";
import { Redirect } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import InfiniteCalendar from 'react-infinite-calendar';
import UserPropertyDisplay from './UserPropertyDisplay'
import 'react-infinite-calendar/styles.css';
import Input from "muicss/lib/react/input";
import {getproperties} from "../../actions/UserPropertiesAction";
var today = new Date();
var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
class UserSearch extends Component {
    constructor (props) {
        super(props)
        this.state = {
            startDate: moment(),
            endDate: moment(),
            state:""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }
    handleSearch(){
        console.log(this.state);
let data ={
    state:this.state.state
}
this.props.getproperties(data);
    }

    handleChange(event){
        this.setState({[event.target.name]:event.target.value});
    }
    handleDataChange(date) {
        this.setState({
            startDate: date
        });
    }

    render() {
        return (
            <div>
                    <div className="searchpanel">
                        <div className={"row"}>
                            <div className="col-sm-3">
                                    <Input  name="state" label="Search property with State name" floatingLabel={true} onChange={this.handleChange} />
                            </div>
                            <div className="col-sm-3">
                                <DatePicker
                                    selected={this.state.startDate}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="col-sm-3">
                                <DatePicker
                                    selected={this.state.endDate}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="col-sm-3"><button className="btn btn-save" onClick={this.handleSearch}>Search</button></div>
                        </div>
                </div>

                <UserPropertyDisplay ></UserPropertyDisplay>
            </div>

        );
    }
}

function mapStateToProps(state){
    return{

    }
}
export default connect(mapStateToProps,{getproperties})(UserSearch);