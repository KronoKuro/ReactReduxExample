import axios from 'axios';


export const getStudent = (id) => {
  debugger;
  //console.log(id)
    return (dispatch) => {
       axios.get('https://localhost:44345/api/student/' + id)
        .then(response => {
            console.log(response.data);
          dispatch({
            type: 'DETAIL',
            student: response.data
        })
        })
        .catch(error => {
            console.log(error);
        });
    };
  };
