// datatype for button props declared here
type ButtonProps = {
  title?: string;
  type: 'submit' | 'button' | 'reset';
  extraClassNames?: string;
  children: React.ReactNode;
};

// datatype for tag props declared here
type TagProps = {
  tag: string;
  extraClassNames?: string;
};
