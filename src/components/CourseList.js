import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CourseList(props) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Course Id</th>
            <th>To Delete</th>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {props.courses.map((_courses) => {
            return (
              <tr keskyy={_courses.id}>
                <td>{_courses.id}</td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => props.deleteCourse(_courses.id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <Link to={"/course/" + _courses.slug}>{_courses.title}</Link>
                </td>
                <td>{_courses.authorId}</td>
                <td>{_courses.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

CourseList.propTypes = {
  deleteCourse: PropTypes.func.isRequired,
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ),
};

export default CourseList;

/*
CourseList.defaultProps = {
  courses: [],
};
*/
