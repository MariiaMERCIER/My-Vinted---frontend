const SelectMenu = ({ display }) => {
  return display ? (
    <select className="menu show">
      <option value="articles">Articles</option>
      <option value="membres">Membres</option>
      <option value="forum">Forum</option>
      <option value="centre d'aide">Centre d'aide</option>
    </select>
  ) : (
    <select className="menu ">
      <option value="articles">Articles</option>
      <option value="membres">Membres</option>
      <option value="forum">Forum</option>
      <option value="centre d'aide">Centre d'aide</option>
    </select>
  );
};

export default SelectMenu;
