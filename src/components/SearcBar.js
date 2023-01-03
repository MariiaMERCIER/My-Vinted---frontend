const SearchBar = ({ placeholder, value, setSearch, display }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return display ? (
    <input
      className="bar-search show"
      type="text"
      name="search"
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  ) : (
    <input
      className="bar-search "
      type="text"
      name="search"
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
export default SearchBar;
