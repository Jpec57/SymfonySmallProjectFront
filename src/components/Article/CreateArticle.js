import React, {Component} from 'react';
import "../App.css"
import { createArticle } from '../../services/articleService';

class CreateArticle extends Component {
    constructor(props){
        super(props);
        this.state = {
            titleError: false,
            descriptionError: false,
            title: "",
            description: "",
        };
    }

    postArticle(){
        if (this.state.title === "" && this.state.description === ""){
            this.setState({
                titleError: true,
                descriptionError: true
            });
            return;
        }
        if (this.state.title === ""){
            this.setState({
                titleError: true,
                descriptionError: false
            });
            return;
        }
        if (this.state.description === ""){
            this.setState({
                titleError: false,
                descriptionError: true
            });
            return;
        }
        createArticle({
            title: this.state.title,
            description: this.state.description
        }).then(()=>{
            this.props.history.push('/');
        });
    }

    onTitleChange(event) {
        this.setState({
            title: event.target.value,
            titleError: false
        });
    }

    onDescriptionChange(event) {
        this.setState({
            description: event.target.value,
            descriptionError: false
        });
    }

    renderError(condition){
        if (condition){
            return (<span className="error-message">This field should not be empty</span>);
        }
        return null;
    }

    render() {
        return (
            <div className="container">
                <div className="form-group">
                    <label>Title:</label>
                    {this.renderError(this.state.titleError)}
                    {/* <span className="error-message">This field should not be empty</span> */}
                    <input type="text" placeholder="Enter here your title" onChange={this.onTitleChange.bind(this)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    {/* <span className="error-message">This field should not be empty</span> */}
                    {this.renderError(this.state.descriptionError)}
                    <textarea id="description" placeholder="Enter here your story" rows='4' onChange={this.onDescriptionChange.bind(this)}></textarea></div>
                <div><button onClick={()=>this.postArticle()}>Post</button></div>
            </div>
        );
    }
}


export default CreateArticle;