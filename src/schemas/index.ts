import * as yup from 'yup';

// validation schema for add new task form declared here
export const addNewTaskSchema = yup.object().shape({
  task: yup.string().required('Please enter a task first!'),
  priority: yup.string().required('Please select a priority!'),
});
