import { useState } from "react";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
      setQuery("");
    }
  };

  return (
    <form className="row" onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Search for meals..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
 <button type="submit">Search</button>
 </form>
  );
}

export default Search
