function FilterChips({ filters, activeFilter, onChange }) {
  return (
    <div className="movies-filters">
      {filters.map((filter) => {
        const isActive = filter === activeFilter;

        return (
          <button
            key={filter}
            type="button"
            onClick={() => onChange(filter)}
            className={`movies-filter-chip${isActive ? " active" : ""}`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}

export default FilterChips;
