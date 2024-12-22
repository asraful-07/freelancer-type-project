import axios from "axios";
import React, { useEffect, useState } from "react";
import JobCard from "../components/JobCard";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [size] = useState(8); // Number of jobs per page
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [totalJobs, setTotalJobs] = useState(0);

  // Fetch Jobs Data
  useEffect(() => {
    const getData = async () => {
      try {
        const { data, headers } = await axios.get(
          "http://localhost:5000/all-jobs",
          {
            params: {
              size,
              page,
              filter: category,
              search,
              sort: sortOrder,
            },
          }
        );

        setJobs(data);
        setTotalJobs(headers["x-total-count"]);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      }
    };

    getData();
  }, [page, size, category, search, sortOrder]);

  // Handle Search
  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    setSearch(e.target.search.value);
  };

  // Handle Category Change
  const handleFilter = (e) => {
    setPage(1);
    setCategory(e.target.value);
  };

  // Handle Sort Change
  const handleSort = (e) => {
    setPage(1);
    setSortOrder(e.target.value);
  };

  // Reset All Filters
  const handleReset = () => {
    setPage(1);
    setCategory("");
    setSearch("");
    setSortOrder("");
  };

  // Pagination Controls
  const totalPages = Math.ceil(totalJobs / size);

  return (
    <div className="container mx-auto mt-24">
      {/* Filters Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-5">
        {/* Category Filter */}
        <select
          name="category"
          id="category"
          className="border p-4 rounded-lg"
          value={category}
          onChange={handleFilter}
        >
          <option value="">Filter By Category</option>
          <option value="Web Development">Web Development</option>
          <option value="Graphics Design">Graphics Design</option>
          <option value="Digital Marketing">Digital Marketing</option>
        </select>

        {/* Search Box */}
        <form onSubmit={handleSearch}>
          <div className="flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
            <input
              className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
              type="text"
              name="search"
              placeholder="Enter Job Title"
              aria-label="Enter Job Title"
            />
            <button
              type="submit"
              className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
            >
              Search
            </button>
          </div>
        </form>

        {/* Sort by Deadline */}
        <select
          name="sort"
          id="sort"
          className="border p-4 rounded-md"
          value={sortOrder}
          onChange={handleSort}
        >
          <option value="">Sort By Deadline</option>
          <option value="asc">Ascending Order</option>
          <option value="dsc">Descending Order</option>
        </select>

        {/* Reset Button */}
        <button
          onClick={handleReset}
          className="btn bg-gray-500 text-white px-4 py-2 rounded-md"
        >
          Reset
        </button>
      </div>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container mx-auto">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 mx-1 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
          disabled={page === 1}
        >
          Previous
        </button>
        <span className="px-4 py-2 mx-1 text-gray-700">{`Page ${page} of ${totalPages}`}</span>
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          className="px-4 py-2 mx-1 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllJobs;
