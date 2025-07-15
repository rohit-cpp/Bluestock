import { Link, Outlet, useLocation } from "react-router-dom";
import {
  Home,
  BarChart2,
  Layers,
  User,
  Settings,
  HelpCircle,
  Bell,
  Search,
  ChevronDown,
} from "lucide-react";
// import Bubble from "./components/Bubble"; // if you have it separately

export default function AdminDashboard() {
  const location = useLocation();
  const isDashboardHome = location.pathname === "/dashboard";

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 space-y-8">
        <div>
          <h2 className="text-xl font-bold text-purple-700 mb-4">
            Bluestock Fintech
          </h2>
          <input
            type="text"
            placeholder="Search"
            className="w-full px-3 py-2 border rounded-md text-sm"
          />
        </div>
        <nav className="space-y-1 text-sm font-medium text-gray-700">
          <p className="text-gray-500 uppercase text-xs mb-1">Menu</p>
          <Link
            to="/dashboard"
            className="flex items-center gap-2 p-2 rounded hover:bg-purple-100"
          >
            <Home className="w-4 h-4" /> Dashboard
          </Link>
          <Link
            to="/dashboard/manage-ipo"
            className="flex items-center gap-2 p-2 rounded hover:bg-purple-100"
          >
            <BarChart2 className="w-4 h-4" /> Manage IPO
          </Link>
          <Link
            to="/dashboard/ipo-subscription"
            className="flex items-center gap-2 p-2 rounded hover:bg-purple-100"
          >
            <Layers className="w-4 h-4" /> IPO Subscription
          </Link>
          <Link
            to="/dashboard/ipo-allotment"
            className="flex items-center gap-2 p-2 rounded hover:bg-purple-100"
          >
            <Layers className="w-4 h-4" /> IPO Allotment
          </Link>

          <p className="text-gray-500 uppercase text-xs mt-6 mb-1">Others</p>
          <Link
            to="/dashboard/settings"
            className="flex items-center gap-2 p-2 rounded hover:bg-purple-100"
          >
            <Settings className="w-4 h-4" /> Settings
          </Link>
          <Link
            to="/dashboard/api-manager"
            className="flex items-center gap-2 p-2 rounded hover:bg-purple-100"
          >
            <User className="w-4 h-4" /> API Manager
          </Link>
          <Link
            to="/dashboard/accounts"
            className="flex items-center gap-2 p-2 rounded hover:bg-purple-100"
          >
            <User className="w-4 h-4" /> Accounts
          </Link>
          <Link
            to="/dashboard/help"
            className="flex items-center gap-2 p-2 rounded hover:bg-purple-100"
          >
            <HelpCircle className="w-4 h-4" /> Help
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        {/* Topbar */}
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border rounded-lg w-full text-sm focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-4">
            <Bell className="w-5 h-5 text-gray-500" />
            <div className="flex items-center gap-2">
              <div className="bg-yellow-100 text-yellow-800 rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                V
              </div>
              <span className="text-sm font-medium">Hi, Vishal</span>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>
        </div>

        {/* Dashboard widgets only for /dashboard route */}
        {isDashboardHome ? (
          <div className="grid md:grid-cols-3 gap-6">
            {/* Left Section */}
            <div>
              <h2 className="text-lg font-semibold mb-2">
                IPO Dashboard India
              </h2>
              <p className="text-sm text-green-500 mb-4">+ 20 IPO in Gain</p>
              <div className="flex items-center gap-4">
                <Bubble text="IPO in Gain" value="20" color="bg-cyan-400" />
                <Bubble text="IPO in Loss" value="9" color="bg-indigo-400" />
                <Bubble
                  text="Total IPO"
                  value="30"
                  color="bg-orange-400"
                  large
                />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
              <p className="text-sm text-gray-500 mb-4">
                Adipisicing elit, sed do eiusmod tempor
              </p>
              <ul className="space-y-3 text-sm">
                {["NSE India", "BSE India", "SEBI", "Money Control"].map(
                  (link, i) => (
                    <li
                      key={i}
                      className="flex justify-between items-center border-b pb-1"
                    >
                      <span>{link}</span>
                      <a href="#" className="text-blue-500 text-xs font-medium">
                        Visit Now
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Pie/Donut Chart Section */}
            <div>
              <h2 className="text-lg font-semibold mb-2">Main Board IPO</h2>
              <p className="text-sm text-gray-500 mb-2">From 01 Jan 2024</p>
              <div className="h-40 w-40 rounded-full border-8 border-indigo-200 border-t-indigo-500 mx-auto relative">
                <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-700">
                  Afternoon IPO NSE & BSE
                </div>
              </div>
              <div className="text-center mt-4">
                <button className="text-xs text-blue-600 border px-3 py-1 rounded-md hover:bg-blue-50">
                  View Report
                </button>
              </div>
              <div className="flex justify-between text-xs text-gray-600 mt-3 px-2">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full" />{" "}
                  Upcoming 15
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full" /> New
                  Listed 25
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-indigo-200 rounded-full" />{" "}
                  Ongoing 2
                </span>
              </div>
            </div>
          </div>
        ) : (
          <Outlet />
        )}
      </main>
    </div>
  );
}

function SidebarItem({ icon, text, active = false }) {
  return (
    <div
      className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer ${
        active
          ? "bg-indigo-50 text-indigo-600 font-semibold"
          : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      {icon}
      <span>{text}</span>
    </div>
  );
}

function Bubble({ value, text, color, large = false }) {
  return (
    <div
      className={`relative flex items-center justify-center rounded-full text-white ${
        large ? "w-24 h-24 text-md font-bold" : "w-16 h-16 text-sm"
      } ${color}`}
    >
      <div className="absolute text-xs -top-5 text-gray-600">{text}</div>
      {value}
    </div>
  );
}
