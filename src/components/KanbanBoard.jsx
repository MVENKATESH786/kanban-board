import React from "react";
import TicketCard from "./TicketCard";

const groupTickets = (tickets, groupBy) => {
  const grouped = {};
  tickets.forEach((ticket) => {
    const key = ticket[groupBy] || "Uncategorized";
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(ticket);
  });
  return grouped;
};

const KanbanBoard = ({ tickets, groupBy, sortBy }) => {
  const groupedTickets = groupTickets(tickets, groupBy);

  const sortedTickets = (group) => {
    return group.sort((a, b) => {
      if (sortBy === "priority") return b.priority - a.priority;
      if (sortBy === "title") return a.title.localeCompare(b.title);
      return 0;
    });
  };

  return (
    <div className="kanban-board">
      {Object.entries(groupedTickets).map(([group, tickets]) => (
        <div key={group} className="kanban-column">
          <h2>{group}</h2>
          {sortedTickets(tickets).map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
