import React from "react";
import "./textarea.scss";

const Textarea = (props) => {
  return (
    <div className="x-container">
      <textarea
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        rows={3}
      />
    </div>
  );
};

export default Textarea;
