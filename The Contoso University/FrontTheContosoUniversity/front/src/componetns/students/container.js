import {connect} from 'react-redux';
import { Student } from "./student";
import * as actionStudents from '../students/action';
import { store } from '../../store';




const mapDispatchToProps = (dispatch) => {
      dispatch(actionStudents.getStudents())
}
const mapStateToProps = state => {

    const props = {
        students: state.studentsReducer.students
    }
    return props;
  };


export default connect(mapStateToProps, mapDispatchToProps)(Student)