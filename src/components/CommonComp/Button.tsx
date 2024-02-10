const Button = ({ type, extraClassNames, children }: IButtonProps) => {
  // rendering custom button component here
  return (
    <button
      type={type}
      className={`text-lg rounded-lg hover:opacity-70 active:scale-95 duration-300 ${extraClassNames}`}
    >
      {children}
    </button>
  );
};

export default Button;
