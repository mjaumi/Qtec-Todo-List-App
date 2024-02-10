'use client';

import { useTaskContext } from '@/contexts/TaskContext';
import { addNewTaskSchema } from '@/schemas';
import { Form, Formik } from 'formik';
import { CgAddR } from 'react-icons/cg';
import { ImCancelCircle } from 'react-icons/im';
import Button from '../Button';
import DropdownField from '../Inputs/DropdownField';
import TextInputField from '../Inputs/TextInputField';

const AddTaskModal = ({ closeModal }: { closeModal: () => void }) => {
  // integration of context hooks here
  const { tasks, setDoRefetch } = useTaskContext();

  console.log(tasks);

  // rendering add task modal component here
  return (
    <div className='p-5'>
      <h3 className='text-center font-medium text-2xl'>Add Task</h3>

      <Formik
        initialValues={{
          task: '',
          priority: '',
        }}
        validationSchema={addNewTaskSchema}
        onSubmit={(values) => {
          let newTask: Task;

          if (tasks.length) {
            newTask = {
              taskId: tasks[tasks.length - 1].taskId + 1,
              task: values.task,
              priority: values.priority as Priority,
              isCompleted: false,
            };
          } else {
            newTask = {
              taskId: 1,
              task: values.task,
              priority: values.priority as Priority,
              isCompleted: false,
            };
          }

          localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
          setDoRefetch(true);
          closeModal();
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
                setFieldValue={props.setFieldValue}
              />

              {props.errors.priority && props.touched.priority && (
                <span className='inline-block text-danger mt-1 ml-1'>
                  {props.errors.priority}
                </span>
              )}
            </div>

            <div className='flex items-center justify-end gap-5 pt-10'>
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
