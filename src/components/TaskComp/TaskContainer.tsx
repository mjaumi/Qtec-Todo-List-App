import AddTaskDiv from './AddTaskDiv';
import TaskCard from './TaskCard';

const TaskContainer = () => {
  // rendering task container component here
  return (
    <section>
      <AddTaskDiv />

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
