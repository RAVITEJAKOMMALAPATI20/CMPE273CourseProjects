import React, { Component } from 'react';
import {Route,BrowserRouter,Link} from 'react-router-dom';
import { white, lightGreen100 } from 'material-ui/styles/colors';


import Pricing from '../PostProperty/Pricing';
import Location from '../PostProperty/Location';
import Photos from '../PostProperty/Photos';
import Details from '../PostProperty/Details';
import RentalRates from '../PostProperty/RentalRates';
import Availability from '../PostProperty/Availability';

class OwnerHome extends Component{

    constructor(props){


        super(props);
        this.state={
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
        this._subList=this._subList.bind(this);
        this.changeState=this.changeState.bind(this);
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
                return <Location clickPrevNext={this.handleClick} changeState ={this.changeState} />
            case 'Photos':
                return <Photos clickPrevNext={this.handleClick} changeState ={this.changeState} />
            case 'Details':
                return <Details clickPrevNext={this.handleClick} changeState ={this.changeState} />
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

    render(){
       return(  <BrowserRouter>
                  <div>

                   <div style={{display: 'flex'}}>
                       <div style={{
                           margin:'60px',
                           width: '20%',
                           height: '500px',
                           background: white,
                           position: "fixed"
                       }}>

                           <h2>Welcome</h2><br/>
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
                      <div>{this._renderSubComp()}</div>
               </div>
           </BrowserRouter>


       );
    }

}

export default OwnerHome;