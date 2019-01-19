import React, { Component } from 'react';
import {Route,BrowserRouter,Link} from 'react-router-dom';
import Pricing from './PostProperty/Pricing';
import Location from './PostProperty/Location';
import Photos from './PostProperty/Photos';
import Details from './PostProperty/Details';
import RentalRates from './PostProperty/RentalRates';
import Availability from './PostProperty/Availability';
import Input from "muicss/lib/react/input";
import connect from "react-redux/es/connect/connect";
import {getbrowserproperty} from "../../actions/BrowserPropertyAction";

class OwnerDasboard extends Component{

    constructor(props){


        super(props);
        this.state={
            propertyid:"",
            render:"",
            location:"",
            details:"",
            pricing:"",
            photos:"",
            availability:"",
            rentalrates:"",
            sublist:false
        }

        this._renderSubComp=this._renderSubComp.bind(this);
        this.handleClick=this.handleClick.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this._subList=this._subList.bind(this);
        this.changeState=this.changeState.bind(this);
    }


    componentWillMount(){
        this.props.getbrowserproperty(this.props.match.params.propertyid);
    }
    handleClick=(name)=>{
        this.setState({render:name,sublist: false});
        if(name=="Availability"|| name=="RentalRates") {
            this.setState({sublist: true});
        }
        }
    changeState(data){
        this.setState({[data.name]:data.value});
        console.log(this.state+"I am state");
        }
    _renderSubComp() {
        switch (this.state.render) {
            case 'Availability':
                return <Availability clickPrevNext={this.handleClick} changeState ={this.changeState} />
            case 'Location' :
                return <Location clickPrevNext={this.handleClick} changeState ={this.changeState}  propertyid={this.state.propertyid}/>
            case 'Photos':
                return <Photos clickPrevNext={this.handleClick} changeState ={this.changeState} />
            case 'Details':
                return <Details clickPrevNext={this.handleClick} changeState ={this.changeState} propertyid={this.state.propertyid} />
            case 'RentalRates':
                return <RentalRates clickPrevNext={this.handleClick} changeState ={this.changeState} />
        }

    }
    _subList(){
        const  element =(<h5><li onClick={this.handleClick.bind(this,"Availability")}>Availability</li><br/><br/>
            <li onClick={this.handleClick.bind(this,"RentalRates")}>Rental Rates</li><br/><br/>
        </h5>);
        if(this.state.sublist==true){
            return element;
        }
    }
    handleChange(){

    }

    render(){
       return(
                  <div className={"maindiv"}>
                      <div className={"acc-panel1"}>
                              <div className={"col-sm-2"}>
                              <div className="panel proppanel panel-default">
                                  <div className="panel-body"><h5>Welcome</h5><hr></hr></div>
                                  <div className="panel-body">
                                      <ul style={{listStyleType :'none' , padding:0}}>
                                          <h4>
                                              <li onClick={this.handleClick.bind(this,"Location")}>Location</li><br/><br/>
                                              <li onClick={this.handleClick.bind(this,"Details")}>Details</li><br/><br/>
                                              <li onClick={this.handleClick.bind(this,"Photos")}>Photos</li><br/><br/>
                                              <li onClick={this.handleClick.bind(this,"Availability")}>Pricing</li><br/>
                                          </h4>
                                          <h5>{this._subList()}</h5>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                              <div className={"col-sm-6"}>
                                  {this._renderSubComp()}
                              </div>
                      </div>
               </div>

       );
    }

}

function mapStateToProps(state){
    console.log(state.properties.property);
    return{
        property:state.properties.property
    }
}
export default connect(mapStateToProps,{getbrowserproperty})(OwnerDasboard);