import { CgAddR } from 'react-icons/cg';
import Button from '../CommonComp/Button';
import TaskCard from './TaskCard';

const TaskContainer = () => {
  // rendering task container component here
  return (
    <section>
      <div className='flex items-center justify-between'>
        <h2 className='text-3xl'>Tasks</h2>

        <Button
          type='button'
          extraClassNames='flex items-center justify-center gap-4 px-8 py-4 bg-info text-white'
        >
          <CgAddR className='h-6 w-6' />
          <span className='text-white'>Add Task</span>
        </Button>
      </div>

      <div className='space-y-4 mt-5'>
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </section>
  );
};

export default TaskContainer;
