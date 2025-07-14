// UpcomingIPOs.jsx
import { Button } from "@/components/ui/button";

const upcoming = [
  {
    name: "Nova Agritech Ltd.",
    price: "39–41",
    open: "2024-01-23",
    close: "2024-01-25",
    lot: "365",
    size: "143 cr",
    type: "Book Built",
    status: "RHP",
  },
  {
    name: "EPACK Durable Ltd.",
    price: "218–230",
    open: "2024-01-19",
    close: "2024-01-23",
    lot: "65",
    size: "640 cr",
    type: "Book Built",
    status: "RHP",
  },
  {
    name: "RK Swamy Ltd.",
    price: "270–288",
    open: "2024-01-22",
    close: "2024-01-24",
    lot: "50",
    size: "424 cr",
    type: "Book Built",
    status: "DRHP",
  },
];

export default function UpcomingIPOs() {
  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Upcoming</h2>
        <Button
          variant="outline"
          className="text-blue-600 border-blue-600 hover:bg-blue-50"
        >
          View All
        </Button>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {upcoming.map((ipo, index) => (
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

      <div className="mt-8 bg-blue-50 rounded-xl p-6 text-center">
        <div className="font-bold text-sm text-blue-800">BLUESTOCK</div>
        <h3 className="text-lg font-semibold mt-2 mb-1">
          Applying for this IPO?
        </h3>
        <p className="text-sm text-gray-600 max-w-xl mx-auto mb-4">
          The way you compare & invest in only the best IPO, let us help you get
          started by comparing and selecting the best Demat account. Open your
          Demat account now to apply for your favourite IPO.
        </p>
        <Button>Open a Demat Account</Button>
      </div>
    </section>
  );
}
