import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

export default class CampsiteInfoComponent extends React.Component {
  renderCampsite() {
    return (
      <div className="col-md-5 m-1">
        <Card>
          <CardImg top src={this.props.campsite.image} alt={this.props.campsite.name} />
          <CardBody>
            <CardTitle>{this.props.campsite.name}</CardTitle>
            <CardText>{this.props.campsite.description}</CardText>
          </CardBody>
        </Card>
      </div>
    )
  }
  renderComments() {
    if (this.props.campsite.comments) {
      return (
        <div className="col-md-5 m-1">
          <h4>Comments</h4>
          {this.props.campsite.comments.map(comment => {
            return (
              <div key={comment.key}>
                <p>{comment.text}</p>
                <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
              </div>
            )
          })
          }
        </div>
      )
    }
  }
  render() {
    if (this.props.campsite) {
      return <div className="row">
        {this.renderCampsite()}
        {this.renderComments()}
      </div>;
    } else { return (<div></div>) };
  };
}

