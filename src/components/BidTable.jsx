import React from "react";

const BidTable = ({ bid, handleCheng }) => {
  const { _id, job_title, email, date, price, category, status } = bid; // Destructure bid data

  return (
    <tr>
      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
        {job_title}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
        {email}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
        {date}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
        ${price}
      </td>
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center gap-x-2">
          <p className="px-3 py-1 rounded-full text-blue-500 bg-blue-100/60 text-xs">
            {category}
          </p>
        </div>
      </td>
      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div
          className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${
            status === "Complete"
              ? "bg-green-100/60 text-green-500"
              : "bg-yellow-100/60 text-yellow-500"
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              status === "Complete" ? "bg-green-500" : "bg-yellow-500"
            }`}
          ></span>
          <h2 className="text-sm font-normal">{status}</h2>
        </div>
      </td>
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center gap-x-6">
          <button
            disabled={status === "In Progress" || status === "Completed"}
            onClick={() => handleCheng(_id, status, "In Progress")}
            className="disabled:cursor-not-allowed text-gray-500 transition-colors duration-200 hover:text-red-500 focus:outline-none"
            title="Mark as Complete"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          </button>

          <button
            disabled={status === "Rejected" || status === "Completed"}
            onClick={() => handleCheng(_id, status, "Rejected")}
            className="disabled:cursor-not-allowed text-gray-500 transition-colors duration-200 hover:text-yellow-500 focus:outline-none"
            title="Reject Bid"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
              />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default BidTable;
