'use client';

import { useState } from 'react';
import { CgAddR } from 'react-icons/cg';
import Button from '../CommonComp/Button';
import AddTaskModal from '../CommonComp/Modals/AddTaskModal';
import ParentModal from '../CommonComp/Modals/ParentModal';

const AddTaskDiv = () => {
  // integration of react hooks here
  const [showAddModal, setShowAddModal] = useState<boolean>(false);

  // rendering add task div component here
  return (
    <div className='flex items-center justify-between'>
      <h2 className='text-3xl'>Tasks</h2>

      <Button
        type='button'
        onClick={() => setShowAddModal(true)}
        extraClassNames='flex items-center justify-center gap-4 px-8 py-4 bg-info text-white'
      >
        <CgAddR className='h-6 w-6' />
        <span className='text-white'>Add Task</span>
      </Button>

      <ParentModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        showCloseBtn
      >
        <AddTaskModal closeModal={() => setShowAddModal(false)} />
      </ParentModal>
    </div>
  );
};

export default AddTaskDiv;
