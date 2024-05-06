import React, { useState } from "react";
import Filters from "./components/Filters";
import Cards from "./components/Cards";

function Main() {
  // State to store filter values
  const [filters, setFilters] = useState({
    role: [],
    experience: [],
    location: [],
    remote: [],
    techStack: [],
    basePay: [],
    companyName: "", // For company name search
  });

  // Function to update filters
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="Main">
      <Filters onFilterChange={handleFilterChange} />
      <Cards filters={filters} />
    </div>
  );
}

export default Main;
