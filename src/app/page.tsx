import TaskContainer from '@/components/TaskComp/TaskContainer';
import TaskCounter from '@/components/TaskComp/TaskCounter';
import TaskContextProvider from '@/contexts/TaskContext';

export default function Home() {
  // rendering the home page here
  return (
    <main className='w-4/5 mx-auto py-10 space-y-10'>
      <TaskContextProvider>
        <TaskCounter />
        <TaskContainer />
      </TaskContextProvider>
    </main>
  );
}
