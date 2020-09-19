import React, { useState } from "react";
import "./App.css";
import "h8k-components";

import Slides from "./components/Slides";
const title = "Slideshow App";

function App({ slides }) {
  // console.log(slides[0]);
  const [index, setIndex] = useState(0);
  const prevSlide = () => {
    setIndex(index - 1 % (slides.length));
  };
  const nextSlide = () => {
    setIndex(index + 1 % (slides.length));
  };
  const resetSlides = () => {
    setIndex(0);
  };
  return (
    <div>
      <h8k-navbar header={title}></h8k-navbar>
      <div className="App">
        <Slides
          slides={slides}
          prevSlide={prevSlide}
          nextSlide={nextSlide}
          resetSlides={resetSlides}
          index={index}
        />
      </div>
    </div>
  );
}

export default App;
