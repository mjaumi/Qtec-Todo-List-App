import { useTaskContext } from '@/contexts/TaskContext';
import { addEditTaskSchema } from '@/schemas';
import { Form, Formik } from 'formik';
import { FaRegSave } from 'react-icons/fa';
import { ImCancelCircle } from 'react-icons/im';
import { toast } from 'react-toastify';
import Button from '../Button';
import DropdownField from '../Inputs/DropdownField';
import TextInputField from '../Inputs/TextInputField';

const EditTaskModal = ({
  taskId,
  closeModal,
}: {
  taskId: number;
  closeModal: () => void;
}) => {
  // integration of context hooks here
  const { tasks, refetch } = useTaskContext();

  // fetching the task that needs to edit here
  const taskToEdit = tasks.find((task) => task.taskId === taskId);

  // rendering edit task modal component here
  return (
    <div className='p-5'>
      <h3 className='text-center font-medium text-2xl'>Edit Task</h3>

      <Formik
        initialValues={{
          task: taskToEdit?.task || '',
          priority: taskToEdit?.priority || '',
        }}
        validationSchema={addEditTaskSchema}
        onSubmit={(values) => {
          console.log(values);

          if (
            taskToEdit?.task !== values.task ||
            taskToEdit?.priority !== values.priority
          ) {
            const updatedTask = {
              ...taskToEdit,
              task: values.task,
              priority: values.priority as Priority,
            };

            const indexOfUpdatedTask = tasks.indexOf(taskToEdit as Task);

            tasks.splice(indexOfUpdatedTask, 1, updatedTask as Task);

            localStorage.setItem('tasks', JSON.stringify([...tasks]));

            toast.success('Task Updated Successfully!!');

            refetch();
            closeModal();
          } else {
            toast.error('Please Make Sure You Have Made Any Changes!!');
          }
        }}
      >
        {(props) => (
          <Form className='my-10 space-y-5'>
            <div>
              <TextInputField
                name='task'
                label='Task'
                placeholder='Write New Task Here...'
                value={props.values.task}
                onChange={(e) => {
                  props.setFieldValue('task', e.target.value);
                }}
              />

              {props.errors.task && props.touched.task && (
                <span className='inline-block text-danger mt-1 ml-1'>
                  {props.errors.task}
                </span>
              )}
            </div>

            <div>
              <p className='font-medium mb-1 ml-1'>Priority</p>
              <DropdownField
                options={['', 'High', 'Medium', 'Low']}
                value={props.values.priority}
                setFieldValue={props.setFieldValue}
              />

              {props.errors.priority && props.touched.priority && (
                <span className='inline-block text-danger mt-1 ml-1'>
                  {props.errors.priority}
                </span>
              )}
            </div>

            <div className='flex items-center justify-center md:justify-end gap-5 pt-10'>
              <Button
                type='button'
                onClick={() => closeModal()}
                extraClassNames='flex items-center justify-center gap-2 border border-danger px-4 py-3 text-danger'
              >
                <ImCancelCircle />
                Cancel
              </Button>

              <Button
                type='submit'
                extraClassNames='flex items-center justify-center gap-2 border border-success px-4 py-3 text-success'
              >
                <FaRegSave />
                Save Task
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditTaskModal;
