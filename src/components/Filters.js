import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";

const Filters = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <FilterByName
        filterByName={props.filterByName}
        handleFilterName={props.handleFilterName}
      />
      <FilterBySpecies />
    </form>
  );
};
export default Filters;
