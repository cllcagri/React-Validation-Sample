import React from "react";

const Validation = props => {
  let validationLength = "";

  if (props.inputLength === 0) {
    validationLength = "There is no text !!";
  } else if (props.inputLength > 0 && props.inputLength < 5) {
    validationLength = "Text is too short !!";
  } else {
    validationLength = "Text long enough !!";
  }

  return (
    <div>
      <p>{validationLength}</p>
    </div>
  );
};

export default Validation;
