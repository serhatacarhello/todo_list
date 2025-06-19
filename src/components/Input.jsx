function Input({ value, type, onChange, placeholder, className, autoFocus, onBlur, onKeyDown, checked }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      autoFocus={autoFocus}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      checked={checked}
    />
  );
}

export default Input;