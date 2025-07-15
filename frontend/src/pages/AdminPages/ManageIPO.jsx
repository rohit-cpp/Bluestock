// UpcomingIPODashboard.jsx
import { useState } from "react";
import { Eye, Trash2, Edit } from "lucide-react";
import { Navigate, useNavigate } from "react-router-dom";

const dummyData = [
  {
    company: "Adani Power",
    priceBand: "₹ 329 - 136",
    open: "2023-06-03",
    close: "2024-06-05",
    issueSize: "45530.15 Cr.",
    issueType: "Book Built",
    listingDate: "2023-06-10",
    status: "Ongoing",
  },
  {
    company: "VBL LTD",
    priceBand: "₹ 229 - 136",
    open: "2024-06-03",
    close: "2024-06-05",
    issueSize: "1330.15 Cr.",
    issueType: "Book Built",
    listingDate: "2018-06-10",
    status: "Coming",
  },
  {
    company: "Tata Motor",
    priceBand: "₹ 12549 - 136",
    open: "2024-06-03",
    close: "2024-06-05",
    issueSize: "1340.15 Cr.",
    issueType: "Book Built",
    listingDate: "2016-06-10",
    status: "New Listed",
  },
  // Add more entries for 10 rows total
  {
    company: "HDFC LTD",
    priceBand: "₹ 1244 - 136",
    open: "2024-06-03",
    close: "2024-06-05",
    issueSize: "830.15 Cr.",
    issueType: "Book Built",
    listingDate: "2029-06-11",
    status: "Coming",
  },
  {
    company: "Tata Motor",
    priceBand: "₹ 629 - 136",
    open: "2024-06-01",
    close: "2024-06-05",
    issueSize: "820.15 Cr.",
    issueType: "Book Built",
    listingDate: "2023-06-10",
    status: "Ongoing",
  },
  {
    company: "VBL LTD",
    priceBand: "₹ 629 - 136",
    open: "2024-06-03",
    close: "2024-06-05",
    issueSize: "130.15 Cr.",
    issueType: "Book Built",
    listingDate: "2024-06-10",
    status: "Coming",
  },
  {
    company: "Tata Motor",
    priceBand: "₹ 6729 - 136",
    open: "2024-06-03",
    close: "2024-06-05",
    issueSize: "170.15 Cr.",
    issueType: "Book Built",
    listingDate: "2027-06-10",
    status: "New Listed",
  },
  {
    company: "VBL LTD",
    priceBand: "₹ 1629 - 136",
    open: "2024-06-03",
    close: "2024-06-05",
    issueSize: "130.15 Cr.",
    issueType: "Book Built",
    listingDate: "2022-06-10",
    status: "Coming",
  },
  {
    company: "Tata Motor",
    priceBand: "₹ 2329 - 136",
    open: "2024-06-03",
    close: "2024-06-05",
    issueSize: "130.15 Cr.",
    issueType: "Book Built",
    listingDate: "2023-06-10",
    status: "New Listed",
  },
  {
    company: "VBL LTD",
    priceBand: "₹ 329 - 136",
    open: "2024-06-03",
    close: "2024-06-05",
    issueSize: "130.15 Cr.",
    issueType: "Book Built",
    listingDate: "2021-06-10",
    status: "Coming",
  },
];

const statusClasses = {
  Ongoing: "bg-green-100 text-green-700",
  Coming: "bg-yellow-100 text-yellow-800",
  "New Listed": "bg-red-100 text-red-700",
};

export default function UpcomingIPODashboard() {
  const [data, setData] = useState(dummyData);
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Upcomming IPO | Dashboard</h2>
        <button
          onClick={() => navigate("/dashboard/register-ipo")}
          className="bg-purple-600 text-white text-sm px-4 py-2 rounded hover:bg-purple-700"
        >
          Register IPO
        </button>
      </div>

      <table className="min-w-full bg-white rounded-md overflow-hidden">
        <thead>
          <tr className="bg-gray-100 text-sm text-left">
            {[
              "Company",
              "Price Band",
              "Open",
              "Close",
              "ISSUE SIZE",
              "ISSUE Type",
              "Listing Date",
              "Status",
              "Action",
              "Delete/View",
            ].map((h, i) => (
              <th key={i} className="p-3">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((ipo, i) => (
            <tr key={i} className="text-sm border-b hover:bg-gray-50">
              <td className="p-3 font-medium">{ipo.company}</td>
              <td className="p-3">{ipo.priceBand}</td>
              <td className="p-3">{ipo.open}</td>
              <td className="p-3">{ipo.close}</td>
              <td className="p-3">{ipo.issueSize}</td>
              <td className="p-3">{ipo.issueType}</td>
              <td className="p-3">{ipo.listingDate}</td>
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    statusClasses[ipo.status]
                  }`}
                >
                  {ipo.status}
                </span>
              </td>
              <td className="p-3">
                <button className="bg-purple-600 text-white text-xs px-3 py-1 rounded hover:bg-purple-700">
                  Update
                </button>
              </td>
              <td className="p-3 flex gap-2">
                <button>
                  <Trash2 className="text-red-500 w-4 h-4 hover:text-red-700" />
                </button>
                <button>
                  <Eye className="text-gray-700 w-4 h-4 hover:text-black" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-end mt-4">
        <div className="flex items-center space-x-2 text-sm">
          <button className="px-3 py-1 border rounded">1</button>
          <button className="px-3 py-1 border rounded">2</button>
          <span>...</span>
          <button className="px-3 py-1 border rounded">10</button>
          <button className="px-3 py-1 border rounded">&gt;</button>
        </div>
      </div>
    </div>
  );
}
