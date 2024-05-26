import { useState } from "react";

const Carousel = ({ slides }) => {
  const [currIndex, setCurrIndex] = useState(0);

  function previousButton() {
    setCurrIndex(currIndex === 0 ? slides.length - 1 : currIndex - 1);
  }

  function nextButton() {
    setCurrIndex(currIndex === slides.length - 1 ? 0 : currIndex + 1);
  }

  return (
    <div>
      <img
        src={`${slides[currIndex].url}`}
        alt={`${slides[currIndex].title}`}
      />
      <div className="text-sm flex space-x-3 justify-center">
        <button onClick={previousButton}>Previous</button>
        <button onClick={nextButton}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;
