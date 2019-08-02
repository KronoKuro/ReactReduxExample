import {connect} from 'react-redux';
import { StudentDelete } from './studentdelete';
import * as deleteStudent from './action';
import * as studentDetail from '../studentdetail/action';
import { Router, Route, browserHistory, IndexRoute} from 'react-router'

const mapDispatchToProps = (dispatch, props) => {
  debugger;
  const id = props.match.params.id;
  dispatch(studentDetail.getStudent(id));
  return {delete : (id, history) => { dispatch(deleteStudent.deleteStudent(id, history)) }}
      
}
const mapStateToProps = state => {
    const props = {
        student: state.studentsReducer.student,
        enrolments: state.studentsReducer.student.enrolments
    };
    return props;
  };


export default connect(mapStateToProps, mapDispatchToProps)(StudentDelete)