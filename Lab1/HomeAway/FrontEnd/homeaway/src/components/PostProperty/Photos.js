import React, { Component } from 'react';
import axios from 'axios';
export default class Photos extends Component{

    constructor(props){
        super(props);
        this.state = {fileType: '', file: ''}
        this.handleClick =this.handleClick.bind(this);
        this.handleImageChange =this.handleImageChange.bind(this);
    }
//http://localhost:3000/ownerproperty/uploadphotos
handleClick(event){
    const data = new FormData();
    data.append('image', this.state.file,this.state.file.name);
    data.append('user','Ravi');
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
console.log(data);
    axios.post("http://localhost:3000/ownerproperty/uploadphotos", data, config)
        .then((response)=>{
            console.log(response);
        }).then((err)=>{
        console.log("error");
    });

}

handleImageChange(e){
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            this.setState({
                file: file,
            });
        }
        reader.readAsDataURL(file);
    }
render(){
    return(
        <div className="container">
            <div className={"row"}>
                <div className={"col-sm-3"}></div>
                <div className={"col-sm-6"}>

                <div className="panel"><h3>Add up to 50 photos of your property</h3></div>
                <p>Showcase your property’s best features (no pets or people, please). Requirements: JPEG, at least 1920 x 1080 pixels, less than 20MB file size, 6 photos minimum. Need photos? Hire a professional.</p>
                <div className="panel">

                    <div className="form-group">
                        <input type="file" className="form-control" id="customFile" name="homeimages" onChange={this.handleImageChange} />
                    </div>
    <button onClick={this.handleClick}>Upload</button>

                </div>
                <div className="panel">
                    <ul className="pager">
                        <li className="previous"><a href="#">Previous</a></li>
                        <li className="next"><a href="#">Next</a></li>
                    </ul>
                </div>

                </div>
                <div className={"col-sm-3"}></div>
            </div>
        </div>
    );
}

}
