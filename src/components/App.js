import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import CoursesPage from "./CoursesPage";
import Header from "./commons/Header";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import ManageCoursePage from "./ManageCoursePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />
        <Redirect from="/about-d" to="/about"></Redirect>
        <Route component={NotFoundPage}></Route>
      </Switch>
    </div>
  );
}

export default App;

/*function App() {
  function getPage() {
    const urlPara = window.location.pathname;

    if (urlPara === "/about") return <AboutPage />;
    else if (urlPara === "/courses") return <CoursesPage />;
    else return <HomePage />;
  }
  return (
    <div className="container-fluid">
      <Header />
      {getPage()}
    </div>
  );
}

*/
//return urlPara === "/about" ? <AboutPage /> : <HomePage />;
