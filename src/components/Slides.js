import React, { useState } from "react";

function Slides({ slides, index, prevSlide, nextSlide, resetSlides }) {
  // console.log(slides);
  const [item, setItem] = useState({
    title: slides[index].title,
    text: slides[index].text,
  });
  const updateNext = () => {
    setItem({
      ...item,
      title: slides[index + 1].title,
      text: slides[index + 1].text,
    });
  };

  const updatePrev = () => {
    setItem({
      ...item,
      title: slides[index - 1].title,
      text: slides[index - 1].text,
    });
  };

  const updateReset=()=>{
    setItem({...item,
        title: slides[0].title,
        text: slides[0].text,
    })}

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          onClick={() => {
            resetSlides();
            updateReset();
          }}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          onClick={() => {
            prevSlide();
            updatePrev();
          }}
          disabled={index === 0}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          onClick={() => {
            nextSlide();
            updateNext();
          }}
          disabled={index === slides.length - 1}
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{item.title}</h1>
        <p data-testid="text">{item.text}</p>
      </div>
    </div>
  );
}

export default Slides;
