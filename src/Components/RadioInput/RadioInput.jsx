import React from "react";
import "./style.css";
function RadioInput() {
  return (
    <div className="radio">
      <input
        className="radio__input"
        type="radio"
        name="filter"
        value="all"
        id="all"
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
        Complete
      </label>
      <input
        className="radio__input"
        type="radio"
        name="filter"
        value="incomplete"
        id="incomplete"
      />
      <label className="radio__label" htmlFor="incomplete">
        Incomplete
      </label>
    </div>
  );
}

export default RadioInput;
