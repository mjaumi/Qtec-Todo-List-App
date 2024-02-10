const DataNotFound = ({ message }: { message: string }) => {
  // rendering data not found component here
  return (
    <p className='text-danger text-lg text-center font-medium'>{message}</p>
  );
};

export default DataNotFound;
