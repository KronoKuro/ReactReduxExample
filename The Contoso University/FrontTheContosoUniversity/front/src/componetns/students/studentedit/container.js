import { connect } from 'react-redux';
import * as studentCreators from './action';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import  * as editStudent from './action';
import { StudentEdit } from './studentedit';
import * as studentDetail from '../studentdetail/action';



const mapDispatchToProps = (dispatch, props) => {
  debugger;
  const id = props.match.params.id;
      dispatch(studentDetail.getStudent(id))
  return {
    changeValue: (student) => {debugger; dispatch(editStudent.changeValue(student))} ,
    //changeValue: (name, value) => { dispatch(editStudent.changeValue(name, value))} ,
    update: (student, history) => { dispatch(editStudent.updateStudent(student, history)) }
  }
}


const mapStateToProps = state => {
  
  const props = {
    student: state.studentsReducer.student
  };
  return props;
};


export default connect(mapStateToProps, mapDispatchToProps)(StudentEdit)