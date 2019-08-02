import { connect } from 'react-redux';
import * as studentCreators from './action';
import { StudentCreate } from './studentcreate';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { useState } from 'react';


const mapDispatchToProps = (dispatch) => {
  debugger;
  return {
    create: (student, history) => { dispatch(studentCreators.createStudent(student, history)) }
  }
}


const mapStateToProps = state => {
  
  const props = {
    student: state.studentsReducer.student
  };
  return props;
};


export default connect(mapStateToProps, mapDispatchToProps)(StudentCreate)