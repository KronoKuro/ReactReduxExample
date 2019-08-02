import {connect} from 'react-redux';
import * as studentDetail from './action';
import { StudentDetail } from './studentdetail';
import { Router, Route, browserHistory, IndexRoute} from 'react-router'

const mapDispatchToProps = (dispatch, props) => {
  debugger;
      const id = props.match.params.id;
      dispatch(studentDetail.getStudent(id))
}
const mapStateToProps = state => {
    const props = {
        student: state.studentsReducer.student,
        enrolments: state.studentsReducer.student.enrolments
    };
    return props;
  };


export default connect(mapStateToProps, mapDispatchToProps)(StudentDetail)