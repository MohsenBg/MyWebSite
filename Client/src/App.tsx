import React from "react";
import "./App.scss";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./Components/NavBar/NavBar/Navbar";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import MySkill from "./Pages/MySkill/MySkill";
import Project from "./Pages/Project/Project";
import { initialState } from "./Redux/Store/Store";
import Loading from "./Components/extra_features/Loading/Loading";
import { connect } from "react-redux";
import Footer from "./Components/Footer/Footer";

interface props {
  loadingStatus: any;
}

const App: React.FC<props> = (loadingStatus) => {
  return (
    <div className="App">
      <Router>
        <div className="NavBarComponent">
          <Navbar />
        </div>
        <div>
          {loadingStatus.loadingStatus ? (
            <div className="Loading">
              <Loading />
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Project" component={Project} />
          <Route path="/About" component={About} />
          <Route path="/MySkill" component={MySkill} />
        </Switch>
      </Router>
    </div>
  );
};

const mapStateToProps = (state: initialState) => {
  return {
    loadingStatus: state.Loading.loading,
  };
};

export default connect(mapStateToProps)(App);
