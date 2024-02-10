import { Form, Formik } from 'formik';
import { CgAddR } from 'react-icons/cg';
import { ImCancelCircle } from 'react-icons/im';
import Button from '../Button';
import DropdownField from '../Inputs/DropdownField';
import TextInputField from '../Inputs/TextInputField';

const AddTaskModal = () => {
  // rendering add task modal component here
  return (
    <div className='p-5'>
      <h3 className='text-center font-medium text-2xl'>Add Task</h3>

      <Formik
        initialValues={{
          task: '',
          priority: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props) => (
          <Form className='my-10 space-y-5'>
            <div>
              <TextInputField
                name='task'
                label='Task'
                placeholder='Write New Task Here...'
                onChange={(e) => props.setFieldValue('task', e.target.value)}
              />
            </div>

            <div>
              <p className='font-medium mb-1 ml-1'>Priority</p>
              <DropdownField
                options={['', 'High', 'Medium', 'Low']}
                setFieldValue={props.setFieldValue}
              />
            </div>

            <div className='flex items-center justify-end gap-5 pt-10'>
              <Button
                type='button'
                extraClassNames='flex items-center justify-center gap-2 border border-danger px-4 py-3 text-danger'
              >
                <ImCancelCircle />
                Cancel
              </Button>

              <Button
                type='submit'
                extraClassNames='flex items-center justify-center gap-2 border border-success px-4 py-3 text-success'
              >
                <CgAddR />
                Add Task
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddTaskModal;
