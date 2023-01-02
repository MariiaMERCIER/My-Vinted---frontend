const Input = ({ setFunction, value, placeholder, type }) => {
  return (
    <input
      className="input-text"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={setFunction}
    />
  );
};

export default Input;
