import React, { Component } from 'react';

export default class Pricing extends Component{


    render(){
        //redirect based on successful login
        let redirectVar = null;
        // if(cookie.load('cookie')){
        //     redirectVar = <Redirect to= "/home"/>
        // }
        console.log(this.props.idFromLocation);
        return(
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-sm-4"}></div>
                    <div className={"col-sm-6"}>

                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Availability</h4>
                                <h6 className="card-subtitle mb-2 text-muted">Already know when you would like your property to be available?
                                    You can also make changes after publishing your listing.</h6>
                                <div className="form-group">
                                    <input  type="text" className="form-control"
                                            name="address" placeholder="Address"/>
                                </div>
                                <ul className="pager">
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
