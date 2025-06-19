import Input from "./Input";

function TodoForm({ value, onChange, onSubmit, className }) {
  return (
    <form onSubmit={onSubmit}>
      <Input
        className={className}
        value={value}
        onChange={onChange}
        placeholder="What needs to be done?"
      />
    </form>
  );
}

export default TodoForm;
