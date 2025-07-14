import { useIpoStore } from "@/store/useIpoStore";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function IpoDetail() {
  const selectedIPO = useIpoStore((state) => state.selectedIPO);
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedIPO) {
      navigate("/ipo");
    }
  }, [selectedIPO, navigate]);

  if (!selectedIPO) return null;

  return (
    <div className="px-4 md:px-12 py-10 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm p-6 border">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={selectedIPO.logo}
            alt={selectedIPO.name}
            className="h-10 w-10 object-contain"
          />
          <h1 className="text-xl font-bold text-blue-700">
            {selectedIPO.name}
          </h1>
        </div>

        <div className="grid gap-3 text-sm text-gray-800">
          <p>
            <strong>Price Band:</strong>{" "}
            {selectedIPO.price ? `Rs ${selectedIPO.price}` : "Not Issued"}
          </p>
          <p>
            <strong>Opening Date:</strong> {selectedIPO.open}
          </p>
          <p>
            <strong>Closing Date:</strong> {selectedIPO.close}
          </p>
          <p>
            <strong>Issue Size:</strong> {selectedIPO.issueSize}
          </p>
          <p>
            <strong>Issue Type:</strong> {selectedIPO.issueType}
          </p>
          <p>
            <strong>Listing Date:</strong> {selectedIPO.listDate}
          </p>
        </div>

        <div className="mt-4 flex gap-2">
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

        <div className="mt-6 text-xs text-gray-600">
          <p>
            Note: All IPO data shown is based on publicly available
            announcements. Please verify details through official sources before
            applying.
          </p>
        </div>

        <Button
          variant="outline"
          className="mt-6"
          onClick={() => navigate("/")}
        >
          ← Back to IPO Listings
        </Button>
      </div>
    </div>
  );
}
