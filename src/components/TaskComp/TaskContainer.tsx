'use client';

import { usePriorityContext } from '@/contexts/PriorityContext';
import { useTaskContext } from '@/contexts/TaskContext';
import AddTaskDiv from './AddTaskDiv';
import TaskCard from './TaskCard';

const TaskContainer = () => {
  // integration of context hooks here
  const { tasks } = useTaskContext();

  const { priority } = usePriorityContext();

  const filterTaskByPriority = (task: Task) => {
    if (priority === '') {
      return true;
    }
    return task.priority === priority;
  };

  // rendering task container component here
  return (
    <section>
      <AddTaskDiv />

      <div className='space-y-4 mt-5'>
        {tasks.length &&
          tasks
            .filter(filterTaskByPriority)
            .sort((a, b) => a.taskId - b.taskId)
            .map((task) => <TaskCard key={task.taskId} task={task} />)}
      </div>
    </section>
  );
};

export default TaskContainer;
