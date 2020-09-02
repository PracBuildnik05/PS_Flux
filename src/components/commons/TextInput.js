import React from "react";
import PropTypes from "prop-types";

function TextInput(props) {
  let wrapperClass = "form-group";
  if (props.error.length > 0) {
    wrapperClass += " has-error";
  }
  return (
    <div className={wrapperClass}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <input
          id={props.id}
          type="text"
          name={props.name}
          className="form-control"
          value={props.value}
          onChange={props.handleChange}
        />
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
};

TextInput.defaultProps = {
  error: "",
};
export default TextInput;
