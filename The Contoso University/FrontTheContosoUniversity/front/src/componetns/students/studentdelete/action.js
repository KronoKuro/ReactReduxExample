import axios from 'axios';

  export const deleteStudent = (id, history) => {
    debugger;
      return (dispatch) => {
         axios.delete(`https://localhost:44345/api/student/${id}` )
          .then(response => {
              debugger;
            dispatch({  type: 'STUDENT_DELETE', id: response.data })
            history.push('/students');
          })
          .catch(error => {
              console.log(error);
          });
      };
    };
    
