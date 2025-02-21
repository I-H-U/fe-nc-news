import { useSearchParams } from "react-router-dom";

export default function SortControls() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sort_by") || "created_at";
  const order = searchParams.get("order") || "desc";

  const handleSortChange = (e) => {
    setSearchParams({ sort_by: e.target.value, order });
  };

  const toggleOrder = () => {
    setSearchParams({
      sort_by: sortBy,
      order: order === "asc" ? "desc" : "asc",
    });
  };

  return (
    <div className="sort-controls">
      <label>Sort by:</label>
      <select value={sortBy} onChange={handleSortChange}>
        <option value="created_at">Date</option>
        <option value="comment_count">Comment Count</option>
        <option value="votes">Votes</option>
      </select>
      <button onClick={toggleOrder}>
        {order === "asc" ? "Ascending" : "Descending"}
      </button>
    </div>
  );
}
