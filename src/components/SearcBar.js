const SearchBar = ({ setFunction, placeholder, value, setSearch }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <input
      className="bar-search"
      type="text"
      name="search"
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      onKeyDown={setFunction}
    />
  );
};
export default SearchBar;
