// src/pages/AdminPages/RegisterIPO.jsx
import { useState } from "react";
import { Input } from "@/components/ui/input";
export default function RegisterIPO() {
  const [formData, setFormData] = useState({
    companyName: "",
    priceBand: "",
    openDate: "",
    closeDate: "",
    issueSize: "",
    issueType: "",
    listingDate: "",
    status: "",
    ipoPrice: "",
    listingPrice: "",
    gain: "",
    listingDateNew: "",
    cmp: "",
    currentReturn: "",
    rhp: "",
    drhp: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">Upcoming IPO Information</h1>
        <div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded mr-2">
            Register
          </button>
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded">
            Cancel
          </button>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Sidebar */}
        <aside className="w-48">
          <ul className="space-y-2">
            <li className="bg-blue-100 text-blue-600 rounded px-3 py-2">
              IPO Information
            </li>
            <li className="text-gray-600 px-3 py-2">IPO Info</li>
          </ul>
        </aside>

        {/* Form Section */}
        <section className="flex-1 bg-white rounded shadow p-6">
          <h2 className="text-lg font-semibold mb-4">IPO Information</h2>

          <div className="mb-4">
            <p className="text-sm font-medium">Company Logo</p>
            <div className="flex items-center gap-4 mt-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/National_Stock_Exchange_of_India_Logo.svg/640px-National_Stock_Exchange_of_India_Logo.svg.png"
                alt="Logo"
                className="w-10 h-10 rounded-full"
              />
              <button className="bg-blue-500 text-white px-3 py-1 rounded">
                Upload Logo
              </button>
              <button className="border border-red-500 text-red-500 px-3 py-1 rounded">
                Delete
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Input
              type="text"
              name="companyName"
              placeholder="Company Name"
              className="input"
              onChange={handleChange}
            />
            <Input
              type="text"
              name="priceBand"
              placeholder="Price Band"
              className="input"
              onChange={handleChange}
            />

            <Input
              type="text"
              name="openDate"
              placeholder="Open"
              className="input"
              onChange={handleChange}
            />
            <Input
              type="text"
              name="closeDate"
              placeholder="Close"
              className="input"
              onChange={handleChange}
            />

            <Input
              type="text"
              name="issueSize"
              placeholder="Issue Size"
              className="input"
              onChange={handleChange}
            />
            <select name="issueType" className="input" onChange={handleChange}>
              <option value="">Issue Type</option>
              <option value="Book Built">Book Built</option>
              <option value="Fixed Price">Fixed Price</option>
            </select>

            <Input
              type="text"
              name="listingDate"
              placeholder="Listing Date"
              className="input"
              onChange={handleChange}
            />
            <select name="status" className="input" onChange={handleChange}>
              <option value="">Status</option>
              <option value="Coming">Coming</option>
              <option value="Ongoing">Ongoing</option>
              <option value="New Listed">New Listed</option>
            </select>
          </div>

          <h3 className="mt-6 text-sm font-medium">
            NEW LISTED IPO DETAILS (WHEN IPO GET LISTED)
          </h3>

          <div className="grid grid-cols-2 gap-4 mt-2">
            <Input
              type="text"
              name="ipoPrice"
              placeholder="IPO Price"
              className="input"
              onChange={handleChange}
            />
            <Input
              type="text"
              name="listingPrice"
              placeholder="Listing Price"
              className="input"
              onChange={handleChange}
            />

            <Input
              type="text"
              name="gain"
              placeholder="Listing Gain"
              className="input"
              onChange={handleChange}
            />
            <Input
              type="text"
              name="listingDateNew"
              placeholder="Listing Date"
              className="input"
              onChange={handleChange}
            />

            <Input
              type="text"
              name="cmp"
              placeholder="CMP"
              className="input"
              onChange={handleChange}
            />
            <Input
              type="text"
              name="currentReturn"
              placeholder="Current Return"
              className="input"
              onChange={handleChange}
            />

            <Input
              type="text"
              name="rhp"
              placeholder="Enter RHP PDF Link"
              className="input"
              onChange={handleChange}
            />
            <Input
              type="text"
              name="drhp"
              placeholder="Enter DRHP PDF Link"
              className="input"
              onChange={handleChange}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
