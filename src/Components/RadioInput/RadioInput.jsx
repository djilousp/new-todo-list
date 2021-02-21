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
        value="complete"
        id="complete"
      />
      <label className="radio__label" htmlFor="complete">
        Completed
      </label>
      <input
        className="radio__input"
        type="radio"
        name="filter"
        value="uncomplete"
        id="incomplete"
      />
      <label className="radio__label" htmlFor="incomplete">
        Uncomplete
      </label>
    </div>
  );
};

export default RadioInput;
