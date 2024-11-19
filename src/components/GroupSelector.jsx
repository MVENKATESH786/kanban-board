import React from "react";

const GroupSelector = ({ groupBy, setGroupBy }) => {
  return (
    <select value={groupBy} onChange={(e) => setGroupBy(e.target.value)}>
      <option value="status">Status</option>
      <option value="user">User</option>
      <option value="priority">Priority</option>
    </select>
  );
};

export default GroupSelector;
