import React from "react";

const SortSelector = ({ sortBy, setSortBy }) => {
  return (
    <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
      <option value="">No Sorting</option>
      <option value="priority">Priority</option>
      <option value="title">Title</option>
    </select>
  );
};

export default SortSelector;
