import React, { createRef } from "react";

// Each Editor is a pair of label and corresponding input fields,
// which are being passed a callback function from parent component to save the user changes to the input to the state of parent
export const Editor = ({ name, value, handleChange, isEdited }) => {
  const textInput = createRef();
  const label = createRef();

  // const setFocus = () => {
  //   console.log(textInput);
  //   textInput.current.focus();
  // };

  // const editInput = () => {
  //   toggleEdit(!isEdited);
  //   setFocus();
  // };

  // const disableOnBlur = event => {
  //   // https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
  //   if (!event.currentTarget.contains(event.relatedTarget)) {
  //     toggleEdit(!isEdited);
  //   }
  // };

  // function handleClick() {
  //   console.log(textInput);
  //   textInput.current.focus();
  // }

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
