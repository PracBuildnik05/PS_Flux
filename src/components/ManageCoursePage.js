import React, { useState, useEffect } from "react";
//import { Prompt } from "react-router-dom";
import CourseForm from "./CourseForm";
//import * as courseApi from "../api/courseApi";
import * as courseActions from "../actions/courseActions";
import { toast } from "react-toastify";
import courseStore from "../stores/courseStore";

const ManageCoursePage = (props) => {
  const [errors, setErrors] = useState({});
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  useEffect(() => {
    courseStore.addChangeListener(onChangeFlux);
    const slug = props.match.params.slug;
    if (courses.length === 0) {
      courseActions.loadCourses();
    } else if (slug) {
      setCourse(courseStore.getCourseBySlug(slug)); // from the path/ courses/:slug
    }
    return () => courseStore.removeChangeListener(onChangeFlux);
  }, [courses.length, props.match.params.slug]);

  function onChangeFlux(params) {
    setCourses(courseStore.getCourses());
  }

  function onChange({ target }) {
    const updatedCourse = {
      ...course,
      [target.name]: target.value,
    };
    setCourse(updatedCourse);
  }

  function handleValidationOnSubmit() {
    const _errors = {};
    if (!course.title) _errors.title = "Title is Required.";
    if (!course.authorId) _errors.authorId = "Author Id is Required.";
    if (!course.category) _errors.category = "Category is Required.";
    setErrors(_errors);
    // Forms seems to be valid if this _errors object has no properties
    return Object.keys(_errors).length === 0;
  }

  function onSubmit(event) {
    event.preventDefault();
    if (!handleValidationOnSubmit()) return;
    courseActions.saveCourse(course);
    props.history.push("/courses");
    toast.success("Sucessful Course Save");
  }

  return (
    <div style={{ color: "blue" }} className="jumbotron">
      <h1>Mangage the Course</h1>
      <p>The page is designed to Edit the Course</p>

      {props.match.params.slug}
      <CourseForm
        errors={errors}
        course={course}
        handleChange={onChange}
        handleSubmit={onSubmit}
      />
    </div>
  );
};

export default ManageCoursePage;

// <Prompt when="true" message="Are you sure you want to leave ?" />

// Initially for Reference : without Flux, Stores
/*
import React, { useState, useEffect } from "react";
//import { Prompt } from "react-router-dom";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";
import { toast } from "react-toastify";

const ManageCoursePage = (props) => {
  const [errors, setErrors] = useState({});

  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  useEffect(() => {
    const slug = props.match.params.slug;
    if (slug) {
      courseApi.getCourseBySlug(slug).then((_course) => {
        setCourse(_course);
      });
    }
  }, [props.match.params.slug]);

  function onChange({ target }) {
    const updatedCourse = {
      ...course,
      [target.name]: target.value,
    };
    setCourse(updatedCourse);
  }

  function handleValidationOnSubmit() {
    const _errors = {};
    if (!course.title) _errors.title = "Title is Required.";
    if (!course.authorId) _errors.authorId = "Author Id is Required.";
    if (!course.category) _errors.category = "Category is Required.";
    setErrors(_errors);
    // Forms seems to be valid if this _errors object has no properties
    return Object.keys(_errors).length === 0;
  }

  function onSubmit(event) {
    event.preventDefault();
    if (!handleValidationOnSubmit()) return;
    courseApi.saveCourse(course);
    props.history.push("/courses");
    toast.success("Sucessful Course Save");
  }

  return (
    <div style={{ color: "blue" }} className="jumbotron">
      <h1>Mangage the Course</h1>
      <p>The page is designed to Edit the Course</p>

      {props.match.params.slug}
      <CourseForm
        errors={errors}
        course={course}
        handleChange={onChange}
        handleSubmit={onSubmit}
      />
    </div>
  );
};

export default ManageCoursePage;

// <Prompt when="true" message="Are you sure you want to leave ?" />
*/
