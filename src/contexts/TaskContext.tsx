'use client';

import { createContext, useContext, useMemo, useState } from 'react';

type TaskContextProps = {
  tasks: Array<Task>;
  setDoRefetch: React.Dispatch<React.SetStateAction<boolean>>;
};

// creating the context here
const TaskContext = createContext<TaskContextProps | null>(null);

// initiating the context provider here
const TaskContextProvider = ({ children }: { children: React.ReactNode }) => {
  // integration of react hooks here
  const [tasks, setTasks] = useState<Array<Task>>([]);
  const [doRefetch, setDoRefetch] = useState<boolean>(false);

  // getting the tasks from the local storage here
  useMemo(() => {
    if (typeof window !== 'undefined') {
      const localTasks = localStorage.getItem('tasks');

      if (localTasks) {
        setTasks(JSON.parse(localTasks));
      }

      if (localTasks && doRefetch) {
        setTasks(JSON.parse(localTasks));
        setDoRefetch(false);
      }
    }
  }, [doRefetch]);

  return (
    <TaskContext.Provider value={{ tasks, setDoRefetch }}>
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
