
const initialState = {
  students: [],
  student: {}
}
export default function studentReducer(state = initialState, action) {
  debugger;
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        ...state,
        students: action.students
      }
    case 'DETAIL':
      return {
        ...state,
        student: action.student
      }
    case 'STUDENT_ADD':
      return {
        ...state,
        student: action.student
    }
    case 'STUDENT_DELETE':
      return {
        ...state,
        id: action.id
      }
    default:
      return state
  }
}

