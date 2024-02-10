const Header = () => {
  // rendering the header component here
  return (
    <header className='py-6 shadow-todo-shadow'>
      <div className='w-4/5 mx-auto'>
        <h1 className='text-4xl font-semibold'>
          Todo <span className='text-2xl text-info'>List</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
