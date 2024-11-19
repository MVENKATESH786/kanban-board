import React, { useState, useEffect } from "react";
import KanbanBoard from "./components/KanbanBoard";
import GroupSelector from "./components/GroupSelector";
import SortSelector from "./components/SortSelector";
import { fetchTickets } from "./api";

//need to remove

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState("status");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    fetchTickets().then((data) => setTickets(data));
  }, []);

  return (
    <div className="app-container">
      <h1>Kanban Board</h1>
      <div className="selectors">
        <GroupSelector groupBy={groupBy} setGroupBy={setGroupBy} />
        <SortSelector sortBy={sortBy} setSortBy={setSortBy} />
      </div>
      <KanbanBoard tickets={tickets} groupBy={groupBy} sortBy={sortBy} />
    </div>
  );
};

export default App;
