const Button = ({
  title,
  type,
  extraClassNames,
  children,
  onClick,
}: ButtonProps) => {
  // rendering custom button component here
  return (
    <button
      title={title}
      type={type}
      onClick={onClick}
      className={`text-lg rounded-lg hover:opacity-70 active:scale-95 duration-300 ${extraClassNames}`}
    >
      {children}
    </button>
  );
};

export default Button;
