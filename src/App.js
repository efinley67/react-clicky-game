import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Image from "./components/Images";
import "./App.css";
import images from "./images.json";


class App extends Component {
  state = {
    images
  };

  render() {
    return (
      <Wrapper>
        <Title>Clicky Game!</Title>
        {this.state.images.map(image => (
          <Image 
            id={image.id}
            key={image.id}
            image={image.image}
            alt={image.name}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
