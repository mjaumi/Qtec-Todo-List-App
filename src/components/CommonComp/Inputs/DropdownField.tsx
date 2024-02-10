'use client';

import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';

const DropdownField = ({ options, setFieldValue }: DropdownFieldProps) => {
  // integration of react hooks here
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  // handler function to handle changing of dropdown values here
  const changeValueHandler = (value: string) => {
    setValue(value);
    setShowOptions(false);

    setFieldValue && setFieldValue('priority', value);
  };

  // rendering dropdown field component here
  return (
    <div className='relative'>
      <div
        onClick={() => setShowOptions((state) => !state)}
        className='w-full flex items-center justify-between rounded-lg bg-primary shadow-todo-card-shadow px-4 py-3 cursor-pointer hover:opacity-70 active:scale-[0.98] duration-300'
      >
        <p>{value ? value : '--Select--'}</p>

        <FaChevronDown
          className={`duration-300 ${showOptions ? 'rotate-180' : ''} `}
        />
      </div>

      <ul
        className={`w-full absolute rounded-lg bg-primary shadow-todo-card-shadow mt-2 overflow-hidden ${
          showOptions ? 'scale-y-100' : 'scale-y-0'
        } duration-300 origin-top`}
      >
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => changeValueHandler(option)}
            className='px-4 py-2 hover:bg-slate-200 duration-300 cursor-pointer'
          >
            {option ? option : '--Select--'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownField;
