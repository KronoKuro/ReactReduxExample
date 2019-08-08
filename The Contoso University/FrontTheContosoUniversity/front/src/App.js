import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Redirect } 
    from "react-router-dom";
import './App.css';
import history from './history';
import StudentContainer from './componetns/students/container';
import StudentDetailContainer from './componetns/students/studentdetail/container';
import StudentCreateContainer from './componetns/students/studentcreate/container';
import StudentDeleteContainer from './componetns/students/studentdelete/container';
import StudentEditContainer from './componetns/students/studentedit/container';

class App extends Component {
 render() {
  return <Router  history={history}>
          <Switch>
              <Route path="/students" component={ StudentContainer } />
              <Route path="/student/:id" component={ StudentDetailContainer }  />
              <Route path="/createStudent" component={ StudentCreateContainer }  />
              <Route path="/studentdelete/:id" component={ StudentDeleteContainer }  />
              <Route path="/studentupdate/:id" component={ StudentEditContainer }  />
          </Switch>
      </Router>
      
 }
}


export default connect()(App);