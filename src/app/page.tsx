import TaskContainer from '@/components/TaskComp/TaskContainer';
import TaskCounter from '@/components/TaskComp/TaskCounter';

export default function Home() {
  // rendering the home page here
  return (
    <main className='w-4/5 mx-auto py-10 space-y-10'>
      <TaskCounter />
      <TaskContainer />
    </main>
  );
}
