import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import cookie from 'react-cookies';


const headerdiv={

}
class Header extends Component{

    constructor(props){
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }
    handleLogout = () => {
        cookie.remove('cookie', { path: '/' })
    }


    render(){
        let navLogin = null;
        if(cookie.load('cookie')){
            console.log("Able to read cookie");
            navLogin = (
                <ul class="nav navbar-nav navbar-right">
                    <li><Link to="/" onClick = {this.handleLogout}><span class="glyphicon glyphicon-user"></span>Logout</Link></li>
                </ul>
            );
        }else{
            //Else display login button
            console.log("Not Able to read cookie");
            navLogin = (
                <ul class="nav navbar-nav navbar-right">
                    <li><Link to="/login"><span class="glyphicon glyphicon-log-in"></span> Login</Link></li>
                </ul>
            )
        }

        return(
            <div>
                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-2"><h3>HomeAway</h3></div>
                    <div className="col-sm-3"></div>
                    <div className="col-sm-1">TripBoards</div>
                    <div className="col-sm-1">
                        <div className="dropdown">
                            <button className="btn  dropdown-toggle" type="button"
                                    data-toggle="dropdown">Login
                                <span className="caret"></span></button>
                            <ul className="dropdown-menu">
                                <li><Link to="/TravelerLogin">Traveler Login</Link></li>
                                <li><a href="/OwnerLogin">Owner Login</a></li>
                            </ul>
                        </div></div>
                    <div className="col-sm-1">
                        <div className="dropdown">
                            <button className="btn  dropdown-toggle" type="button"
                                    data-toggle="dropdown">Help
                                <span className="caret"></span></button>
                            <ul className="dropdown-menu">
                                <li><Link to="/TravelerLogin">Help 1</Link></li>
                                <li><a href="/OwnerLogin">Help 1</a></li>
                            </ul>
                        </div></div>
                    <div className="col-sm-2"><div className="btn "> List your Property</div></div>
                    <div className="col-sm-1">Home</div>
                    {navLogin}
                </div>
            </div>


            );
    }

}
export default Header;