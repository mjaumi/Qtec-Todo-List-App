// datatype for button props declared here
type ButtonProps = {
  title?: string;
  type: 'submit' | 'button' | 'reset';
  extraClassNames?: string;
  onClick?: () => void;
  children: React.ReactNode;
  isDisabled?: boolean;
};

// datatype for tag props declared here
type TagProps = {
  tag: string;
  extraClassNames?: string;
};

// datatype for parent modal props declared here
type ParentModalProps = {
  isOpen: boolean;
  onClose: () => void;
  showCloseBtn?: boolean;
  widthClass?: string;
  children: React.ReactNode;
};

// datatype for custom text input props declared here
type TextInputFieldProps = {
  name: string;
  placeholder: string;
  label: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

// datatype for custom dropdown field props declared here
type DropdownFieldProps = {
  options: Array<string>;
  value?: string;
  setFieldValue?: (key: string, value: string) => void;
};

// datatype for priority declared here
type Priority = 'High' | 'Medium' | 'Low';

// datatype for task object declared here
type Task = {
  taskId: number;
  task: string;
  priority: Priority;
  isCompleted: boolean;
};
