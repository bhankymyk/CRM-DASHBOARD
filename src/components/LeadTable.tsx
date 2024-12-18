import { useState } from "react";
import { mockLeads } from "../app/utils/MockData";

export default function LeadsTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedColumns, setSortedColumns] = useState({
    name: { values: [], direction: null },
    topic: { values: [], direction: null },
    status: { values: [], direction: null },
    created: { values: [], direction: null }
  });

  // Filter leads based on the search term
  const filteredLeads = mockLeads.filter(
    (lead) =>
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.status.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const getColumnValues = (key: keyof typeof mockLeads[0]) => {
    return sortedColumns[key].values.length > 0 
      ? sortedColumns[key].values 
      : filteredLeads.map(lead => lead[key]);
  };

  const handleSort = (key: keyof typeof mockLeads[0]) => {
    setSortedColumns(prev => {
      const currentValues = getColumnValues(key);
      const direction = prev[key].direction === 'asc' ? 'desc' : 'asc';
      
      // Sort the values for this column only
      const sortedValues = [...currentValues].sort((a, b) => {
        const valueA = a.toString().toLowerCase();
        const valueB = b.toString().toLowerCase();
        return direction === 'asc' 
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      });

      return {
        ...prev,
        [key]: {
          values: sortedValues,
          direction: direction
        }
      };
    });
  };

  const renderSortIcon = (key: keyof typeof mockLeads[0]) => {
    const direction = sortedColumns[key].direction;
    if (direction) {
      return direction === "asc" ? (
        <span className="ml-2 text-blue-500 cursor-pointer">&#9650;</span>
      ) : (
        <span className="ml-2 text-blue-500 cursor-pointer">&#9660;</span>
      );
    }
    return <span className="ml-2 text-gray-400 cursor-pointer">&#x21C5;</span>;
  };

  return (
    <div className="">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Sort, filter and search with Copilot"
        className="w-full p-3 mb-4 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Leads Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left font-semibold text-gray-600">
                Name 
                <span onClick={() => handleSort("name")}>{renderSortIcon("name")}</span>
              </th>
              <th className="px-4 py-2 text-left font-semibold text-gray-600">
                Topic 
                <span onClick={() => handleSort("topic")}>{renderSortIcon("topic")}</span>
              </th>
              <th className="px-4 py-2 text-left font-semibold text-gray-600">
                Status 
                <span onClick={() => handleSort("status")}>{renderSortIcon("status")}</span>
              </th>
              <th className="px-4 py-2 text-left font-semibold text-gray-600">
                Created On 
                <span onClick={() => handleSort("created")}>{renderSortIcon("created")}</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredLeads.map((_, rowIndex) => (
              <tr key={rowIndex} className="border-t">
                <td className="px-4 py-2">{getColumnValues("name")[rowIndex]}</td>
                <td className="px-4 py-2">{getColumnValues("topic")[rowIndex]}</td>
                <td className="px-4 py-2">{getColumnValues("status")[rowIndex]}</td>
                <td className="px-4 py-2">{getColumnValues("created")[rowIndex]}</td>
              </tr>
            ))}
            {filteredLeads.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-2 text-center text-gray-500">
                  No results found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}