const TaskCounter = () => {
  // rendering task counter component here
  return (
    <section className='w-3/5 mx-auto p-5 rounded-lg shadow-todo-shadow flex items-center justify-between'>
      <h3 className='text-2xl font-medium'>
        Total Tasks: <span className='font-normal text-info'>30</span>
      </h3>
      <h3 className='text-2xl font-medium'>
        Completed Tasks: <span className='font-normal text-success'>20</span>
      </h3>
    </section>
  );
};

export default TaskCounter;
