import React, {Component} from 'react';
import Article from '../Article/Article';
import { getArticles } from '../../services/articleService';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            articles: [],
        };
    }

    componentDidMount(){
        this.loadArticles();
    }

    loadArticles(){
        getArticles().then((articles)=>{
            this.setState({
                articles: articles
            });
        });
    }

    navigateToArticle(id){
        this.props.history.push('/show/' + id, {id: id});
    }

    renderArticle(article, index){
        return (
            <div key={index} className="article-container-div" onClick={() => this.navigateToArticle(article.id)}>
            <Article id={article.id} title={article.title} creationDate={article.creationDate} description={article.description}/>
            </div>
        );
    }

    renderEmptyArticle(){
        if (this.state.articles.length === 0){
            return <span>You should create an article first</span>
        }
    }

    render() {
        return (
            <div className="container">
            {this.renderEmptyArticle()}
                {this.state.articles.map((article, index)=>this.renderArticle(article, index))}
            </div>
        );
    }
}


export default Home;