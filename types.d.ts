// interface for button props declared here
interface IButtonProps {
  type: 'submit' | 'button' | 'reset';
  extraClassNames: string;
  children: React.ReactNode;
}
