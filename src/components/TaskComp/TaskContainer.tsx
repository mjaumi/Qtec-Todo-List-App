'use client';

import { useTaskContext } from '@/contexts/TaskContext';
import AddTaskDiv from './AddTaskDiv';
import TaskCard from './TaskCard';

const TaskContainer = () => {
  // integration of context hooks here
  const { tasks } = useTaskContext();

  // rendering task container component here
  return (
    <section>
      <AddTaskDiv />

      <div className='space-y-4 mt-5'>
        {tasks.length &&
          tasks
            .sort((a, b) => a.taskId - b.taskId)
            .map((task) => <TaskCard key={task.taskId} task={task} />)}
      </div>
    </section>
  );
};

export default TaskContainer;
