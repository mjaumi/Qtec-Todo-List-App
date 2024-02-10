const Button = ({
  title,
  type,
  extraClassNames,
  children,
  onClick,
  isDisabled,
}: ButtonProps) => {
  // rendering custom button component here
  return (
    <button
      title={title}
      type={type}
      onClick={onClick}
      className={`text-lg rounded-lg hover:opacity-70 active:scale-95 duration-300 disabled:opacity-70 disabled:cursor-not-allowed ${extraClassNames}`}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
