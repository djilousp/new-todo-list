import React from "react";
import "./style.css";
const RadioInput = ({ setFilter }) => {
  return (
    <div className="radio" onChange={(e) => setFilter(e.target.value)}>
      <input
        className="radio__input"
        type="radio"
        name="filter"
        value="all"
        id="all"
        defaultChecked
      />
      <label className="radio__label" htmlFor="all">
        All
      </label>
      <input
        className="radio__input"
        type="radio"
        name="filter"
        value="completed"
        id="completed"
      />
      <label className="radio__label" htmlFor="completed">
        Completed
      </label>
      <input
        className="radio__input"
        type="radio"
        name="filter"
        value="uncomplete"
        id="uncomplete"
      />
      <label className="radio__label" htmlFor="uncomplete">
        Uncomplete
      </label>
    </div>
  );
};

export default RadioInput;
