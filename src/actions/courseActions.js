import dispatcher from "../appDispatcher";
import * as courseApi from "../api/courseApi";
import actionTypes from "./actionTypes";

// ACTION CREATOR
export function saveCourse(course) {
  return courseApi.saveCourse(course).then((savedCourse) => {
    dispatcher.dispatch({
      actionType: course.id
        ? actionTypes.UPDATE_COURSE
        : actionTypes.CREATE_COURSE, //ACTION
      course: savedCourse,
    });
  });
}

export function loadCourses() {
  return courseApi.getCourses().then((courses) => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_COURSES, //ACTION
      courses: courses,
    });
  });
}

//DELETE_COURSES

export function deleteCourse(courseID) {
  return courseApi.deleteCourse(courseID).then(() => {
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_COURSES,
      courseID: courseID,
    });
  });
}
