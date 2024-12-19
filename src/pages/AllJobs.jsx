import axios from "axios";
import React, { useEffect, useState } from "react";
import JobCard from "../components/JobCard";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`http://localhost:5000/jobs`);
      setJobs(data);
    };
    getData();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container mx-auto">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
