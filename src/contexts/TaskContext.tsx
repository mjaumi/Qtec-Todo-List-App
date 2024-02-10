'use client';

import { createContext, useContext, useMemo, useState } from 'react';

type TaskContextProps = {
  tasks: Array<Task>;
  refetch: () => void;
};

// creating the context here
const TaskContext = createContext<TaskContextProps | null>(null);

// initiating the context provider here
const TaskContextProvider = ({ children }: { children: React.ReactNode }) => {
  // integration of react hooks here
  const [tasks, setTasks] = useState<Array<Task>>([]);

  // getting the tasks from the local storage here
  useMemo(() => {
    if (typeof window !== 'undefined') {
      const localTasks = JSON.parse(localStorage.getItem('tasks') as string);

      if (localTasks) {
        setTasks(localTasks);
      }
    }
  }, []);

  // function to refetch tasks after mutation declared here
  const refetch = () => {
    const localTasks = JSON.parse(localStorage.getItem('tasks') as string);

    if (localTasks) {
      setTasks(localTasks);
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, refetch }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;

// creating custom hook to call the context here
export const useTaskContext = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error('useTaskContext must be used within a TaskContextProvider');
  }

  return context;
};
