import React, { Component } from 'react';
import RentalRates from '../PostProperty/Details';
import Input from "muicss/lib/react/input";
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
                    <div className="panel proppanel panel-default">
                        <h5 className={"prop-pan-head"}>Availability</h5>
                        <p>Already know when you would like your
                            property to be available?
                            You can also make changes after publishing your listing.</p>

                        <hr></hr>



                        <div className="panel-body">
                            <div>
                                <div className={"col-sm-2"}></div>
                                <div className={"col-sm-8"}>
                                    <Input  name="address" label="Address" floatingLabel={true}   />
                                </div>
                                <div className={"col-sm-2"}></div>
                            </div>

                            <div className={"logfooter"}>
                                <div className={"col-sm-2"}></div>
                                <div className={"col-sm-8"}>
                                    <ul className="pager">
                                        <li className="previous"><a>Previous</a></li>
                                        <li className="next"><a>Next</a></li>
                                    </ul>
                                </div>
                                <div className={"col-sm-2"}></div>
                            </div>
                        </div>
                    </div>
                </div>
            );

        }

}
