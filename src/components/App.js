import React from 'react';
import './App.css';
import Header from "./Header/Header";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./Home/Home";
import CreateArticle from './Article/CreateArticle';
import ShowArticle from './Article/ShowArticle';


const App = () => (
    <Router>
        <div>
            <header className="App-header">
                <Header/>
                <div className="body">
                    <Route exact path="/" component={Home} />
                    <Route exact path="/create" component={CreateArticle} />
                    <Route exact path="/show/:articleId" component={ShowArticle} />
                </div>
            </header>
        </div>
    </Router>
);

export default App;
