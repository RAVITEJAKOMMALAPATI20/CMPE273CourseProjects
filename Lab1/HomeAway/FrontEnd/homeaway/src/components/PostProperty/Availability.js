import React, { Component } from 'react';
import RentalRates from '../PostProperty/Details';
export default class Availability extends Component{


    constructor(props){
        super(props);
        this.state={
            renderNext:false,
        }
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(name,e){
       let data={
            name:"Availability",
            value:this.state
        }
        this.props.changeState(data);
        this.props.clickPrevNext(name);
       // this.setState({[name]: true});
    }
    render(){
        if(this.state.renderNext)
            return (<RentalRates/>);
            return (

                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-sm-4"}></div>
                        <div className={"col-sm-6"}>

                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Availability</h4>
                                    <h6 className="card-subtitle mb-2 text-muted">Already know when you would like your
                                        property to be available?
                                        You can also make changes after publishing your listing.</h6>
                                    <div className="form-group">
                                        <input type="text" className="form-control"
                                               name="address" placeholder="Address"/>
                                    </div>
                                    <ul className="pager">
                                        <li className="next" onClick={this.handleClick.bind(this,"RentalRates")} ><a>Next</a></li>
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
