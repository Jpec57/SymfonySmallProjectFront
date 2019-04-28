import React, {Component} from 'react';
import "./Article.css";
import { Card } from 'react-bootstrap';


class Article extends Component {
    render() {
        return (
            <Card className="article-container" id={"article-" + this.props.id}>
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{this.props.creationDate}</Card.Subtitle>
    <Card.Text>
        {this.props.description}
    </Card.Text>
  </Card.Body>
</Card>
        );
    }
}


export default Article;