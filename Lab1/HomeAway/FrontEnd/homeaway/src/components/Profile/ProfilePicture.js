import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';
import axios from 'axios';


class ProfilePicture extends Component {
    constructor(props){
        super(props);
        this.state={
            fileType:"",
            file:"",
            inputFile:false
        }
        this.handleChange= this.handleChange.bind(this);
        this.handleSave =this.handleSave.bind(this);
        this.handleShow=this.handleShow.bind(this);
    }
    handleSave(event){
        const formData = new FormData();
        formData.append('profilepic', this.state.file);
        formData.append('username',"Ravi");

console.log(formData);
        let config={
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        let url="http://localhost:3000/users/profilepicUpload";
        axios.post(url,formData,config).then(response=>{
            console.log(response);
                if(response.status===200){
                    let obj=response.data.file;
this.setState({
    fileType: response.data.file,
});
                }else {

                }
        });

    }
    handleChange(event){
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.onloadend = () => {
            this.setState({
                file: file,
            });
        }

        reader.readAsDataURL(file);
    }
    handleShow(event){
    this.setState({
    inputFile:true,
    });
    }

    render(){
        let image_tag = null;
        let image_select_tag = null;
        if(this.state.fileType != ""){
            image_tag = <img id = "profile_image" className="img-circle" src= { require('./image/' + this.state.fileType) } alt="Smiley face" height="100px" width="100px" />
        }
        else{
            image_tag = <img id = "profile_image" className="img-circle" src= { require('./image/default.png') } alt="Smiley face" height="100px" width="100px" />
        }
        if(this.state.inputFile==true){
            image_select_tag=(<div><input type={"file"}  name={"profilepic"}accept={"image/png,image/jpg"} onChange={this.handleChange}></input>
            <button onClick={this.handleSave}> save</button></div>);

        }
        return(
            <div>
                <div className="form-group">
                    {image_tag}
                    <div onClick={this.handleShow}>
                        <span className="glyphicon glyphicon-pencil"></span>
                        {image_select_tag}
                    </div>
                </div>


            </div>
        )
    }
}

export default ProfilePicture;