import axios from 'axios';
import { Redirect } from 'react-router-dom';


export const updateStudent = (student, history) => {
  const item = {
    id: student.id,
    firstName: student.firstName,
    lastName: student.lastName,
    enrollmentDate: student.enrollmentDate
  };
    return (dispatch) => {
       axios.put(`https://localhost:44345/api/student/`, item)
        .then(response => {
            debugger;
          dispatch({  type: 'STUDENT_UPDATE', student: response.data })
          console.log(history);
          history.push('/students');
        })
        .catch(error => {
            console.log(error);
        });
    };
  };

  export const changeValue = (value) => {
    
    const item = {
      id: value.id,
      firstName: value.firstName,
      lastName: value.lastName,
      enrollmentDate: value.enrollmentDate
    };
    return (dispatch) => {
      dispatch({type: 'CHANGE_VALUE', student: item})
    };
  }

  /*export const changeValue = (name, value) => {
    debugger;
    return (dispatch) => {
      dispatch({type: 'CHANGE_VALUE', student: item})
    };
  }*/
  
