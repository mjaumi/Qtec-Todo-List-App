import { FaFilter } from 'react-icons/fa';
import DropdownField from './Inputs/DropdownField';

const Header = () => {
  // rendering the header component here
  return (
    <header className='sticky top-0 py-6 shadow-todo-shadow'>
      <div className='w-4/5 mx-auto flex items-center justify-between'>
        <h1 className='text-4xl font-semibold'>
          Todo <span className='text-2xl text-info'>List</span>
        </h1>

        <div className='flex items-center gap-2'>
          <FaFilter className='text-info h-6 w-6' />
          <div className='w-[200px]'>
            <DropdownField options={['', 'Low', 'Medium', 'High']} isFilter />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
