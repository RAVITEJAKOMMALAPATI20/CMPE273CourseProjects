import React, { Component } from 'react';

export default class RentalRates extends Component{
    constructor(props){
        super(props);
        this.state={
            renderNext:false,
        }
        this.handleClick=this.handleClick.bind(this);
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

    render(){
        return(
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-sm-3"}></div>
                    <div className={"col-sm-9"}>

                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">How much do you want to charge?</h3>
                                <h6 className="card-subtitle mb-2 text-muted">We recommend starting with a low price to get a few bookings and earn some initial guest reviews. You can update your rates at any time.</h6>
                                <div className="form-group">
                                    <input  type="text" className="form-control"
                                            name="address" placeholder="Address"/>

                                </div>
                                <ul className="pager">
                                    <li className="previous" onClick={this.handleClick.bind(this,"Availability")} ><a>Back</a></li>
                                    <li className="next" onClick={this.handleClick.bind(this,"RentalRates")}><a>Next</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>


                </div>

            </div>
        );


    }
}
