import { FaRegEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import Button from '../CommonComp/Button';
import TaskTag from './TaskTag';

const TaskCard = ({ task }: { task: Task }) => {
  // destructuring the task object here
  const { task: taskText, priority, isCompleted } = task || {};

  // rendering task card component here
  return (
    <div className='flex items-center justify-between bg-primary shadow-todo-card-shadow px-5 py-4 rounded-xl'>
      <div className='flex items-center gap-2'>
        <input
          title='Mark As Completed'
          type='checkbox'
          className='appearance-none w-6 h-6 rounded-full border border-slate-300 checked:bg-success checked:border-transparent focus:outline-none focus:ring-2 focus:ring-success duration-300 cursor-pointer'
          defaultChecked={isCompleted}
        />
        <p className='text-lg'>{taskText}</p>
      </div>

      <div className='flex items-center gap-4'>
        <TaskTag tag={priority} extraClassNames='text-warning' />

        {isCompleted ? (
          <TaskTag tag='Completed' extraClassNames='text-success' />
        ) : (
          <TaskTag tag='Incomplete' extraClassNames='text-danger' />
        )}

        <Button title='Edit Task' type='button'>
          <FaRegEdit className='h-6 w-6 text-info' />
        </Button>

        <Button title='Edit Task' type='button'>
          <MdDelete className='h-6 w-6 text-danger' />
        </Button>
      </div>
    </div>
  );
};

export default TaskCard;
