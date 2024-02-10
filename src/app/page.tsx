import TaskContainer from '@/components/TaskComp/TaskContainer';
import TaskCounter from '@/components/TaskComp/TaskCounter';
import dynamic from 'next/dynamic';

// dynamically importing task context to avoid hydration error
const DynamicTaskContext = dynamic(
  () => import('@/contexts/TaskContext').then((mod) => mod.default),
  { ssr: false }
);

export default function Home() {
  // rendering the home page here
  return (
    <main className='w-[95%] lg:w-4/5 mx-auto py-10 space-y-10'>
      <DynamicTaskContext>
        <TaskCounter />
        <TaskContainer />
      </DynamicTaskContext>
    </main>
  );
}
