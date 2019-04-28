import React, {Component} from 'react';
import "../App.css"
import Article from './Article';
import { getArticle } from '../../services/articleService';
import { withRouter } from 'react-router-dom'


class ShowArticle extends Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            id: null,
            errors: [],
            article: {
                id: this.props.match.params.articleId,
                title: "",
                description: "",
                creationDate: "",
            },
        };
    }

    componentDidMount(){
        getArticle(this.props.match.params.articleId).then((article)=>{
            this.setState({
                article: article
            })
        });
    }

    render() {
        return (
            <div className="container">
            <Article id={this.state.article.id} title={this.state.article.title} 
            creationDate={this.state.article.creationDate} description={this.state.article.description}/>
            </div>
        );
    }
}


export default withRouter(ShowArticle);