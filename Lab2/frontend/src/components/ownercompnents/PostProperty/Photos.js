import React, { Component } from 'react';
import axios from 'axios';
import Input from "muicss/lib/react/input";
import connect from "react-redux/es/connect/connect";
import {getPropertyPics, uploadPropertyPics} from "../../../actions/UserAction";


class Photos extends Component{

    constructor(props){
        super(props);
        this.state = {files: [],sendfiles:[]}
        this.handleClick =this.handleClick.bind(this);
        this.handleChange =this.handleChange.bind(this);
    }

handleClick(event){
    const data = new FormData();
    data.append('username',this.props.user.username);
    data.append('propertyid',this.props.property.propertyid);
for(let i=0;i<this.state.sendfiles.length;i++){
    data.append('propertypics', this.state.sendfiles[i]);
}
    this.props.uploadPropertyPics(data);
}

    handleChange(event){
        let reader = new FileReader();
        let files = event.target.files;
        let prevStatefiles =this.state.files;
        let prevsendfiles=this.state.sendfiles;
        for(let i =0 ;i<files.length;i++){
            prevsendfiles.push(event.target.files[i]);
            console.log(event.target.files[i]);
            prevStatefiles.push(URL.createObjectURL(event.target.files[i]));
            }
        this.setState({
            files:prevStatefiles,
            sendfiles:prevsendfiles
            });
    }
render(){
        let images=null

       images= this.state.files.map((file) =>
            (<div className="col-sm-2">
                <img src={file} alt={"HII"} height={"100px"} width={"100px"}></img>
            </div>)
        )

    return(
            <div className="container">
                <div className="panel proppanel panel-default">
                    <h5 className={"prop-pan-head"}>Add up to 50 photos of your property</h5>
                    <p>Showcase your property’s best features (no pets or people, please). Requirements: JPEG, at least 1920 x 1080 pixels, less than 20MB file size, 6 photos minimum. Need photos? Hire a professional.</p>

                    <hr></hr>

                    <div className="panel-body">
                        <div className={"row"}>
                            <div className={"col-sm-2"}></div>
                            <div className={"col-sm-8"}>
                                <Input type="file" className="form-control" id="customFile" name="propertypics" onChange={this.handleChange} multiple/>
                                <button onClick={this.handleClick}>Upload</button>
                            </div>
                            <div className={"col-sm-2"}></div>
                        </div>

                        <div className="row">
                            {images}
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

function mapStateToProps(state){
    return{
        user:state.user.user,
        property:state.properties.property
    }
}
export default  connect(mapStateToProps,{getPropertyPics,uploadPropertyPics})(Photos) ;