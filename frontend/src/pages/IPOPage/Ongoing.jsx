// OngoingIPOs.jsx
import { Button } from "@/components/ui/button";

const ongoing = [
  {
    name: "Medi Assist Healthcare Services Ltd. IPO",
    price: "397–418",
    open: "2024-01-15",
    close: "2024-01-17",
    lot: "35",
    size: "1172 cr",
    type: "Book Built",
    status: "RHP",
  },
];

export default function OngoingIPOs() {
  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Ongoing</h2>
        <Button
          variant="outline"
          className="text-blue-600 border-blue-600 hover:bg-blue-50"
        >
          View All
        </Button>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {ongoing.map((ipo, index) => (
          <div key={index} className="border rounded-xl p-4 shadow-sm bg-white">
            <h3 className="font-semibold text-blue-700 mb-1">{ipo.name}</h3>
            <p className="text-sm">PRICE BAND: ₹{ipo.price}</p>
            <p className="text-sm">OPEN: {ipo.open}</p>
            <p className="text-sm">CLOSE: {ipo.close}</p>
            <p className="text-sm">LOT SIZE: {ipo.lot}</p>
            <p className="text-sm">ISSUE SIZE: ₹{ipo.size}</p>
            <p className="text-sm">ISSUE TYPE: {ipo.type}</p>
            <div className="mt-2 flex gap-2">
              <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                {ipo.status}
              </span>
              <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                DRHP
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
