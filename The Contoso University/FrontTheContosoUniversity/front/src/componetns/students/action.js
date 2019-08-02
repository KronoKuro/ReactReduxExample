import axios from 'axios';


export const getStudents = () => {
    return (dispatch) => {
       axios.get('https://localhost:44345/api/student')
        .then(response => {
            console.log(response.data);
          dispatch({
            type: 'SIMPLE_ACTION',
            students: response.data
        })
        })
        .catch(error => {
            console.log(error);
        });
    };
  };
