import React from "react";
import '../styles/youtubeClone.css';

class Searchbar extends React.Component {
  handleChange = (event) => {
    this.setState({
      term: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.term);
  };

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div className="searchField">
              <input
                onChange={this.handleChange}
                name="video-search"
                type="text"
                placeholder="Search.."
                className="seachbar"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Searchbar;
