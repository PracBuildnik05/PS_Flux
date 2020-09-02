import React, { useState, useEffect } from "react";
//import { getCourses } from "../api/courseApi";
import courseStore from "../stores/courseStore";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";
import { loadCourses, deleteCourse } from "../actions/courseActions";

function CoursesPage() {
  const [courses, setCourses] = useState(courseStore.getCourses());

  useEffect(() => {
    //getCourses().then((_courses) => setCourses(_courses));

    courseStore.addChangeListener(onChange);
    if (courseStore.getCourses().length === 0) {
      loadCourses();
    }
    return () => courseStore.removeChangeListener(onChange); // clean up on  un mount
  }, []);

  function onChange() {
    setCourses(courseStore.getCourses()); // with Flux stores
  }

  return (
    <>
      <h2>Courses Offered are avaialble in Tabular Format</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <p> </p>
      <CourseList courses={courses} deleteCourse={deleteCourse} />
    </>
  );
}

export default CoursesPage;

/*class CoursesPage extends React.Component {
  state = {
    courses: [],
  };

  componentDidMount() {
    getCourses().then((courses) => this.setState({ courses: courses }));
  }

  render() {
    return (
      <>
        <h2>Courses Offered are avaialble in Tabular Format</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {this.state.courses.map((courses) => {
              return (
                <tr key={courses.id}>
                  <td>{courses.title}</td>
                  <td>{courses.authorId}</td>
                  <td>{courses.category}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}
*/
