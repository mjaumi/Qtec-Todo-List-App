// interface for button props declared here
interface IButtonProps {
  title?: string;
  type: 'submit' | 'button' | 'reset';
  extraClassNames?: string;
  children: React.ReactNode;
}
