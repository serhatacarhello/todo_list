function FilterList({ selectedFilter, onChange }) {
  const filters = ["All", "Active", "Completed"];

  return (
    <ul className="filters">
      {filters.map((filter) => (
        <li key={filter}>
          <a
            href="#/"
            className={selectedFilter === filter ? "selected" : ""}
            onClick={(e) => {
              e.preventDefault();
              onChange(filter);
            }}
          >
            {filter}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default FilterList;
