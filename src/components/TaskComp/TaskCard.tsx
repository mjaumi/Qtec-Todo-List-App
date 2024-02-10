import { FaRegEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import Button from '../CommonComp/Button';
import TaskTag from './TaskTag';

const TaskCard = () => {
  // rendering task card component here
  return (
    <div className='flex items-center justify-between bg-primary shadow-todo-card-shadow px-5 py-4 rounded-xl'>
      <div className='flex items-center gap-2'>
        <input
          title='Mark As Completed'
          type='checkbox'
          className='appearance-none w-6 h-6 rounded-full border border-slate-300 checked:bg-success checked:border-transparent focus:outline-none focus:ring-2 focus:ring-success duration-300 cursor-pointer'
        />
        <p className='text-lg'>Complete the task</p>
      </div>

      <div className='flex items-center gap-4'>
        <TaskTag tag='High' extraClassNames='text-warning' />

        <TaskTag tag='Completed' extraClassNames='text-success' />

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
