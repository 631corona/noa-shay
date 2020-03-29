import React, { useRef } from "react";
import { numberWithCommas } from "../.././helpers";

function CoronaData(props) {
  const cardRef = useRef(); 

  const handleMouseEnter = () => {
    if (cardRef.current.textContent.match(/confirmed/gi)) {
      cardRef.current.classList.add("btn-primary");
    }
    if (cardRef.current.textContent.match(/deaths/gi)) {
      cardRef.current.classList.add("btn-danger");
    }
    if (cardRef.current.textContent.match(/recovered/gi)) {
      cardRef.current.classList.add("btn-success");
    }
  };
  const handleMouseLeave = () => {
    if (cardRef.current.textContent.match(/confirmed/gi)) {
      cardRef.current.classList.remove("btn-primary");
    }
    if (cardRef.current.textContent.match(/deaths/gi)) {
      cardRef.current.classList.remove("btn-danger");
    }
    if (cardRef.current.textContent.match(/recovered/gi)) {
      cardRef.current.classList.remove("btn-success");
    }
  };
  return (
    <div
      ref={cardRef}
      className="card card-body col-12 col-lg-4 btn"
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      <p className="h2 display-4">{props.children[0]}</p>
      <p className="h2 font-weight-light">
        {numberWithCommas(props.children[1])}
      </p>
    </div>
  );
}

export default CoronaData;
