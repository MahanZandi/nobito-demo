"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("query") || "";
  const [query, setQuery] = useState("");

  useEffect(() => {
    setQuery(initialQuery); // وقتی صفحه لود میشه، مقدار URL رو بذار توی state
  }, [initialQuery]);

  return (
    <div className="p-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border rounded p-2 w-full max-w-md"
        placeholder="جستجو..."
      />
      {/* اینجا می‌تونی بر اساس query لیست پزشک‌ها رو فیلتر کنی */}
    </div>
  );
};

export default SearchPage;
