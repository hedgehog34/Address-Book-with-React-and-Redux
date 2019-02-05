import React, { createRef } from "react";

// Each Editor is a pair of label and corresponding input fields,
// which are being passed a callback function from parent component to save the user changes to the input to the state of parent
export const Editor = ({ name, value, handleChange, isEdited }) => {
  const textInput = createRef();
  const label = createRef();

  return (
    <label htmlFor={name} ref={label}>
      {`${name}:`}
      <input
        className={name}
        name={name}
        defaultValue={value}
        ref={textInput}
        onChange={handleChange}
        disabled={isEdited}
      />
    </label>
  );
};
