import { useTaskContext } from '@/contexts/TaskContext';
import { ChangeEvent, useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { ImCancelCircle } from 'react-icons/im';
import { MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';
import Button from '../CommonComp/Button';
import EditTaskModal from '../CommonComp/Modals/EditTaskModal';
import ParentModal from '../CommonComp/Modals/ParentModal';
import TaskTag from './TaskTag';

const TaskCard = ({ task }: { task: Task }) => {
  // destructuring the task object here
  const { taskId, task: taskText, priority, isCompleted } = task || {};

  // integration of react hooks here
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);

  // integration of context hooks here
  const { tasks, refetch } = useTaskContext();

  // handler function to handle 'mark as complete' feature
  const markTaskAsCompletedHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newUpdatedTasks = tasks.map((task) => {
      if (task.taskId === taskId) {
        return {
          ...task,
          isCompleted: e.target.checked,
        };
      }

      return task;
    });

    localStorage.setItem('tasks', JSON.stringify(newUpdatedTasks));

    toast.success('Task Updated Successfully!!');
    refetch();
  };

  // handler function to handler delete task feature here
  const deleteTaskHandler = () => {
    const newFilteredTasks = tasks.filter((task) => task.taskId !== taskId);

    localStorage.setItem('tasks', JSON.stringify(newFilteredTasks));

    toast.success('Task Deleted Successfully!!');

    refetch();
    setShowDeleteModal(false);
  };

  // rendering task card component here
  return (
    <>
      <div className='flex items-center justify-between bg-primary shadow-todo-card-shadow px-5 py-4 rounded-xl'>
        <div className='flex items-center gap-2'>
          <input
            title='Mark As Completed'
            type='checkbox'
            className='appearance-none w-6 h-6 rounded-full border border-slate-300 checked:bg-success checked:border-transparent focus:outline-none focus:ring-2 focus:ring-success duration-300 cursor-pointer'
            onChange={(e) => markTaskAsCompletedHandler(e)}
            defaultChecked={isCompleted}
          />
          <p
            className={`text-lg ${isCompleted && 'text-success line-through'}`}
          >
            {taskText}
          </p>
        </div>

        <div className='flex items-center gap-4'>
          <TaskTag
            tag={priority}
            extraClassNames={`${
              priority === 'High'
                ? 'text-secondary'
                : priority === 'Medium'
                ? 'text-warning'
                : 'text-info'
            }`}
          />

          {isCompleted ? (
            <TaskTag tag='Completed' extraClassNames='text-success' />
          ) : (
            <TaskTag tag='Incomplete' extraClassNames='text-danger' />
          )}

          <Button
            title='Edit Task'
            onClick={() => setShowEditModal(true)}
            type='button'
          >
            <FaRegEdit className='h-6 w-6 text-info' />
          </Button>

          <Button
            title='Delete Task'
            onClick={() => setShowDeleteModal(true)}
            type='button'
          >
            <MdDelete className='h-6 w-6 text-danger' />
          </Button>
        </div>
      </div>

      <ParentModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        showCloseBtn
      >
        <div className='p-5'>
          <h4 className='text-lg font-medium'>Are You Sure?</h4>
          <p className='text-sm text-gray-600 my-3'>
            Are you sure about deleting this task? Once you delete this task,
            you can not recover it. Do you wish to continue?
          </p>

          <div>
            <div className='flex items-center justify-end gap-5 mt-5'>
              <Button
                type='button'
                onClick={() => setShowDeleteModal(false)}
                extraClassNames='flex items-center justify-center gap-2 border border-danger px-4 py-3 text-danger'
              >
                <ImCancelCircle />
                No, Not Now
              </Button>

              <Button
                type='button'
                onClick={deleteTaskHandler}
                extraClassNames='flex items-center justify-center gap-2 border border-success px-4 py-3 text-success'
              >
                <MdDelete className='h-6 w-6' />
                Yes, I Do
              </Button>
            </div>
          </div>
        </div>
      </ParentModal>

      <ParentModal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        showCloseBtn
      >
        <EditTaskModal
          taskId={taskId}
          closeModal={() => setShowEditModal(false)}
        />
      </ParentModal>
    </>
  );
};

export default TaskCard;
