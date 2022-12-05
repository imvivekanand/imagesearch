import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = {images: []}; //If the output is an array the set the state as the empty array.

  async onSearchSubmit(term) {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID 2tYYF1ggmpGjEUBjgM5ABCIO0JlZ_WRekxkE0oe9tlw",
      },
    });

    this.setState({images: response.data.results});
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.imagess.length} images
      </div>
    );
  }
}

export default App;
