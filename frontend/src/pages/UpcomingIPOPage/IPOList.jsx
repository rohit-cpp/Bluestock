// UpcomingIPOPage.jsx
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import FAQAccordion from "../IPOPage/FaqSection";
import SearchBar from "./SearchBar";
import IpoFilter from "./IPOFilter";
import { useIpoStore } from "@/store/useIpoStore";
import { useNavigate } from "react-router-dom";

const ipoListData = [
  {
    name: "Nova Agritech Ltd.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Nova_Agritech_logo.png/600px-Nova_Agritech_logo.png",
    price: 41,
    open: "2024-01-23",
    close: "2024-01-24",
    issueSize: "143.81 Cr.",
    issueType: "Book Built",
    listDate: "2024-01-30",
  },
  {
    name: "EPACK Durable Ltd.",
    logo: "https://www.epackdurables.com/images/logo.png",
    price: 230,
    open: "2024-01-19",
    close: "2024-01-23",
    issueSize: "640.05 Cr.",
    issueType: "Book Built",
    listDate: "2024-01-29",
  },
  {
    name: "RK Swamy Ltd.",
    logo: "https://www.rkswamy.com/images/logo.svg",
    price: null,
    open: "Not Issued",
    close: "Not Issued",
    issueSize: "Not Issued",
    issueType: "Book Built",
    listDate: "Not Issued",
  },
  {
    name: "Oravel Stays Ltd.",
    logo: "https://1000logos.net/wp-content/uploads/2020/08/Oyo-Logo-768x432.png",
    price: null,
    open: "Not Issued",
    close: "Not Issued",
    issueSize: "8430 Cr.",
    issueType: "Book Built",
    listDate: "Not Issued",
  },
  {
    name: "Imagine Marketing Ltd.",
    logo: "https://cdn.worldvectorlogo.com/logos/boat-3.svg",
    price: null,
    open: "Not Issued",
    close: "Not Issued",
    issueSize: "2000 Cr.",
    issueType: "Book Built",
    listDate: "Not Issued",
  },
  {
    name: "Kids Clinic India Ltd.",
    logo: "https://cdn.yellow.place/uploads/0e/1d/0e1d90e7b8d9c6a5fd82e527ca8b0b36-logo.png",
    price: null,
    open: "Not Issued",
    close: "Not Issued",
    issueSize: "Not Issued",
    issueType: "Book Built",
    listDate: "Not Issued",
  },
  {
    name: "OLA Electric Mobility Ltd.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Ola_Electric_logo.svg",
    price: null,
    open: "Not Issued",
    close: "Not Issued",
    issueSize: "5500 Cr.",
    issueType: "Book Built",
    listDate: "Not Issued",
  },
  {
    name: "One Mobikwik Systems Ltd.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/28/Mobikwik_Logo.svg",
    price: null,
    open: "Not Issued",
    close: "Not Issued",
    issueSize: "1900 Cr.",
    issueType: "Book Built",
    listDate: "Not Issued",
  },
  {
    name: "Le Travenues Technology (Ixigo)",
    logo: "https://companieslogo.com/img/orig/Ixigo.BO-7616b682.png",
    price: null,
    open: "Not Issued",
    close: "Not Issued",
    issueSize: "1600 Cr.",
    issueType: "Book Built",
    listDate: "Not Issued",
  },
  {
    name: "CMR Green Technologies",
    logo: "https://www.cmrgroup.in/assets/img/logo.png",
    price: null,
    open: "Not Issued",
    close: "Not Issued",
    issueSize: "Not Issued",
    issueType: "Book Built",
    listDate: "Not Issued",
  },
  {
    name: "Wellness Forever",
    logo: "https://www.wellnessforever.com/images/logo.png",
    price: null,
    open: "Not Issued",
    close: "Not Issued",
    issueSize: "Not Issued",
    issueType: "Book Built",
    listDate: "Not Issued",
  },
  {
    name: "PKH Ventures Ltd.",
    logo: "https://cdn.freelogovectors.net/wp-content/uploads/2023/06/pkh-ventures-ltd-logo-freelogovectors.net_.png",
    price: null,
    open: "Not Issued",
    close: "Not Issued",
    issueSize: "Not Issued",
    issueType: "Book Built",
    listDate: "Not Issued",
  },
];

export default function UpcomingIPOPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredList, setFilteredList] = useState(ipoListData);
  const [sortDirection, setSortDirection] = useState(null);
  const setSelectedIPO = useIpoStore((state) => state.setSelectedIPO);
  const navigate = useNavigate();

  useEffect(() => {
    let result = ipoListData.filter((ipo) =>
      ipo.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortDirection === "asc") {
      result = result.sort((a, b) => (a.price || 0) - (b.price || 0));
    } else if (sortDirection === "desc") {
      result = result.sort((a, b) => (b.price || 0) - (a.price || 0));
    }

    setFilteredList(result);
  }, [searchTerm, sortDirection]);

  const handleClickIPO = (ipo) => {
    setSelectedIPO(ipo);
    navigate("/ipo-detail");
  };

  return (
    <div className="px-4 md:px-12 py-8 bg-gray-50">
      <h2 className="text-xl md:text-2xl font-bold mb-6">Upcoming IPO</h2>
      <p className="text-sm text-gray-600 mb-6">
        Companies that have filed for an IPO with SEBI. Few details might be
        disclosed by the companies later.
      </p>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <SearchBar onSearch={setSearchTerm} />
        <IpoFilter onSort={setSortDirection} />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredList.map((ipo, index) => (
          <div
            key={index}
            onClick={() => handleClickIPO(ipo)}
            className="bg-white p-4 rounded-lg shadow-sm border cursor-pointer hover:shadow-md transition"
          >
            <div className="flex items-center gap-3 mb-2">
              <img
                src={ipo.logo}
                alt={ipo.name}
                className="h-6 w-6 object-contain"
              />
              <h3 className="font-semibold text-blue-700 text-sm">
                {ipo.name}
              </h3>
            </div>
            <div className="text-xs space-y-1 text-gray-700">
              <p>
                <strong>PRICE BAND:</strong>{" "}
                {ipo.price ? `Rs ${ipo.price}` : "Not Issued"}
              </p>
              <p>
                <strong>OPEN:</strong> {ipo.open}
              </p>
              <p>
                <strong>CLOSE:</strong> {ipo.close}
              </p>
              <p>
                <strong>ISSUE SIZE:</strong> {ipo.issueSize}
              </p>
              <p>
                <strong>ISSUE TYPE:</strong> {ipo.issueType}
              </p>
              <p>
                <strong>LISTING DATE:</strong> {ipo.listDate}
              </p>
            </div>
            <div className="flex gap-2 mt-2">
              <Button
                size="sm"
                className="bg-blue-100 text-blue-700 px-3 py-1 text-xs"
              >
                RHP
              </Button>
              <Button
                size="sm"
                className="bg-red-100 text-red-700 px-3 py-1 text-xs"
              >
                DRHP
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="mt-12">
        <FAQAccordion />
      </div>
    </div>
  );
}
