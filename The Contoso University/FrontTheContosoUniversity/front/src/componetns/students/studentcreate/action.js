import axios from 'axios';
import { Redirect } from 'react-router-dom';

export const createStudent = (student, history) => {
  const item = {
    id: 0,
    firstName: student.firstName,
    lastName: student.lastName,
    enrollmentDate: student.enrollmentDate
  };
    return (dispatch) => {
       axios.post(`https://localhost:44345/api/student/`, item)
        .then(response => {
            debugger;
          dispatch({  type: 'STUDENT_ADD', student: response.data })
          console.log(history);
          history.push('/students');
        })
        .catch(error => {
            console.log(error);
        });
    };
  };
  
