import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      reviews: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/reviews')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            reviews: result
          });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  render() {
    const { error, isLoaded, reviews } = this.state;
    return (
      <>
        <h1>moviefeed</h1>
        <hr />
        <h2>latest reviews</h2>
        {reviews.map(review => (
          <div key={review.id}>
            <strong>{review.movie.title}</strong>
            <br />
            <em>{review.user.username}</em>
            <br />
            Rating: {review.rating}
            <br />
            &ldquo;{review.review}&rdquo;
            <br /><br />
          </div>
        ))}
      </>
    )
  }
}

export default App;
