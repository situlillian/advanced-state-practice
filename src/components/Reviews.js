import React, { Component } from 'react';

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isReviewVisible: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isReviewVisible: !this.state.isReviewVisible
    })
  }


  render() {
    console.log(this.props.reviews);

    let reviews = this.props.reviews.map((item, i) => {
      return (
        <li key={i}>{item.description}</li>
      );
    });

    let reviewDetail = <ul>{reviews}</ul>;

    if (!this.state.isReviewVisible) {
      reviewDetail = <ul />
    }

    let review = this.props.reviews.length > 1 ? 'Reviews' : 'Review'

    return (
      <div onClick={this.handleClick}>
        {this.props.reviews.length} {review}
        <div>
          <br />
          {reviewDetail}
        </div>
      </div>
    );
  }
}

export default Reviews;
