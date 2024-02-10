const TextInputField = ({
  name,
  label,
  onChange,
  placeholder,
}: TextInputFieldProps) => {
  // rendering custom text input field component here
  return (
    <label htmlFor={`${name}-input`}>
      <p className='font-medium mb-1 ml-1'>{label}</p>
      <input
        type='text'
        name={name}
        id={`${name}-input`}
        placeholder={placeholder}
        className='border border-slate-200 rounded-lg px-4 py-3 w-full focus:ring-info focus:outline-info'
        onChange={onChange}
        autoComplete='off'
      />
    </label>
  );
};

export default TextInputField;
