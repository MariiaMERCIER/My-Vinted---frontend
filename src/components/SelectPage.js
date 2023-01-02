const SelectPage = ({ setLimit }) => {
  const handlePageChange = (event) => {
    setLimit(event.target.value);
  };
  return (
    <select className="articles-page" onChange={handlePageChange}>
      <option>Nombre d'article par page</option>
      <option>5</option>
      <option>15</option>
      <option>20</option>
      <option>25</option>
      <option>30</option>
    </select>
  );
};
export default SelectPage;
