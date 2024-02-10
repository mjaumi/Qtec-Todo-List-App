const TaskTag = ({ tag, extraClassNames }: TagProps) => {
  // rendering task tag component here
  return (
    <p
      className={`text-sm border border-slate-200 px-2 py-1 rounded-lg ${extraClassNames}`}
    >
      {tag}
    </p>
  );
};

export default TaskTag;
