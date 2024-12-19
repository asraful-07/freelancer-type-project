import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

import { AuthContext } from "../provider/AuthProvider";

const MyPostedJobs = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      getData();
    }
  }, [user]);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:5000/jobs/${user?.email}`
      );
      setJobs(response.data);
    } catch (error) {
      console.error("Failed to fetch jobs:", error);
      toast.error("Error fetching jobs.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/job/${id}`);
      toast.success("Delete Successful");
      // Refresh the UI
      getData();
    } catch (error) {
      console.error("Failed to delete job:", error);
      toast.error("Error deleting job.");
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-10">
        <span className="loading loading-spinner text-neutral"></span>
      </div>
    );
  }

  return (
    <section className="container px-4 mx-auto pt-12">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800">My Posted Jobs</h2>
        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full">
          {jobs.length} Job{jobs.length !== 1 ? "s" : ""}
        </span>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-3.5 px-4 text-sm font-normal text-left text-gray-500">
                      Title
                    </th>
                    <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">
                      Deadline
                    </th>
                    <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">
                      Price Range
                    </th>
                    <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">
                      Category
                    </th>
                    <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">
                      Description
                    </th>
                    <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {jobs.map((job) => (
                    <tr key={job._id}>
                      <td className="px-4 py-4 text-sm text-gray-500">
                        {job.job_title}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500">
                        {new Date(job.deadline).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500">
                        ${job.min_price} - ${job.max_price}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500">
                        {job.category}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500">
                        {job.description.substring(0, 18)}...
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500">
                        <div className="flex items-center gap-x-6">
                          <button
                            onClick={() => handleDelete(job._id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            Delete
                          </button>
                          <Link
                            to={`/update/${job._id}`}
                            className="text-blue-500 hover:text-blue-700"
                          >
                            Edit
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {jobs.length === 0 && (
                    <tr>
                      <td
                        colSpan="6"
                        className="px-4 py-4 text-center text-gray-500"
                      >
                        No jobs posted yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyPostedJobs;
