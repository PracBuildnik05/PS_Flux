import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _courses = [];

class CourseStore extends EventEmitter {
  addChangeListener(callback) {
    // console.log("addChangeListener()");
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
    // console.log("removeListener()");
  }
  emitChange() {
    //console.log("emitChange()");
    this.emit(CHANGE_EVENT);
  }

  getCourses() {
    // console.log("get courses ()");
    return _courses;
  }

  getCourseBySlug(slug) {
    return _courses.find((course) => course.slug === slug);
  }
}

const store = new CourseStore();

Dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.CREATE_COURSE:
      _courses.push(action.course);
      store.emitChange();
      break;
    case actionTypes.UPDATE_COURSE:
      _courses = _courses.map((__courses) =>
        __courses.id === action.course.id ? action.course : __courses
      );
      store.emitChange();
      break;

    case actionTypes.DELETE_COURSES:
      _courses = _courses.filter(
        (_courses) => _courses.id !== parseInt(action.courseID, 10)
      );
      store.emitChange();
      break;

    case actionTypes.LOAD_COURSES:
      _courses = action.courses;
      store.emitChange();
      break;
    default:
    // do nothing
  }
});

export default store;
