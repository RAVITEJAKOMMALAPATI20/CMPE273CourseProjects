import React, { Component } from 'react';

export default class OwnerDashBoard extends Component{

constructor(props) {
    super(props);
    this.state = {
        propertyDetails: []
    }
}
    componentDidMount(){
        axios.get('http://localhost:3001/getpropertyDetails')
            .then((response) => {
                //update the state with the response data
                this.setState({
                    propertyDetails : this.state.propertyDetails.concat(response.data)
                });
            });
    }
    render(){
        return(
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-sm-4"}></div>
                    <div className={"col-sm-6"}>

                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Verify the location of your rental</h4>
                                <h6 className="card-subtitle mb-2 text-muted">Use the map below to adjust the pin if needed</h6>
                                <div className="form-group">
                                    <input  type="text" className="form-control"
                                            name="address" placeholder="Address"/>

                                </div>
                                <ul className="pager">
                                    <li className="previous"><a href="#">Back</a></li>
                                    <li className="next"><a href="#">Next</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className={"col-sm-2"}></div>

                </div>

            </div>
        );


    }
}
