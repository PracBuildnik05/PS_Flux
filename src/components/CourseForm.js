import React from "react";
import TextInput from "./commons/TextInput";
import PropTypes from "prop-types";

function CourseForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <TextInput
        error={props.errors.title}
        id="title"
        label="Title"
        name="title"
        value={props.course.title}
        handleChange={props.handleChange}
      />

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            value={props.course.authorId || ""}
            className="form-control"
            onChange={props.handleChange}
          >
            <option value=""></option>
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
        </div>
        {props.errors.authorId && (
          <div className="alert alert-danger">{props.errors.authorId}</div>
        )}
      </div>

      <TextInput
        error={props.errors.category}
        label="Category"
        id="category"
        name="category"
        value={props.course.category}
        handleChange={props.handleChange}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default CourseForm;
