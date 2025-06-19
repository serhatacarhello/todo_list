function Input({ value, type, onChange, placeholder, className }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  );
}

export default Input;
