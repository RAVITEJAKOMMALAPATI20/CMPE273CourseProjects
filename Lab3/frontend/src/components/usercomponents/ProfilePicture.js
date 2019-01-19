import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import connect from "react-redux/es/connect/connect";
import {updateProfilePic} from "../../actions/UserAction";
import {getprofilepic} from "../../actions/UserAction";

class ProfilePicture extends Component {
    constructor(props){
        super(props);
        this.state={
            fileType:"",
            file:null,
            inputFile:false
        }
        this.handleChange= this.handleChange.bind(this);
        this.handleSave =this.handleSave.bind(this);
        this.handleShow=this.handleShow.bind(this);
    }
    componentWillMount() {
        console.log(this.props.userprofilepic);
        if (this.props.userprofilepic == "") {
        this.props.getprofilepic({username: this.props.user.username});
    }
    }
    handleSave(event){
        const data = new FormData();
        data.append('username',this.props.user.username);
        data.append('profilepic', this.state.file);
        this.props.updateProfilePic(data);
    }
    handleChange(event){
        let file = event.target.files[0];
            this.setState({
                file: file,
            });

    }
    handleShow(event){
    this.setState({
    inputFile:true,
    });
    }

    render(){
        let image_tag = null;
        let image_select_tag = null;
        let pencil =null;
        if(this.props.userprofilepic != ""){
            image_tag = <img id = "profile_image" className="img-circle" src= {"data:image/jpg;base64,"+this.props.userprofilepic} alt="Smiley face" height={this.props.height} width={this.props.width} />
        }
        else{
            image_tag = <img id = "profile_image" className="img-circle" src= { require('./image/default.png') } alt="Smiley face" height="40px" width="40px" />
        }
        if(this.state.inputFile==true){
            image_select_tag=(<div><input type={"file"}  name={"profilepic"}accept={"image/png,image/jpg"} onChange={this.handleChange}></input>
            <button onClick={this.handleSave}> save</button></div>);
        }
        if(this.props.editable==true){
            pencil =<span className="glyphicon glyphicon-pencil"></span>
        }
        return(
            <div>
                <div className="form-group">
                    {image_tag}
                    <div onClick={this.handleShow}>
                        {pencil}
                        {image_select_tag}
                    </div>
                </div>


            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        userprofilepic:state.user.userprofilepic,
        user:state.user.user
    }
}

export default connect(mapStateToProps,{getprofilepic,updateProfilePic})(ProfilePicture);