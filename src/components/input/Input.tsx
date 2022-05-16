import React from "react";
import "./input.scss";

const Input = (props: any) => {
  return (
    <div className="x-container">
      <input
        type={props.type}
        onChange={props.onChange}
        name={props.name}
        ref={props.innerRef}
        value={props.value}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
