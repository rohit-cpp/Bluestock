// NewListedIPOs.jsx
import { Button } from "@/components/ui/button";

const listed = [
  {
    name: "Jyoti CNC Automation Ltd.",
    price: "331",
    list: "2024-01-16",
    gain: "12%",
    current: "370.65",
  },
  {
    name: "Innova Captab Ltd.",
    price: "448",
    list: "2024-01-12",
    gain: "8.3%",
    current: "485",
  },
  {
    name: "Azad Engineering Ltd.",
    price: "524",
    list: "2024-01-09",
    gain: "20.6%",
    current: "620.55",
  },
];

export default function NewListedIPOs() {
  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">New Listed</h2>
        <Button
          variant="outline"
          className="text-blue-600 border-blue-600 hover:bg-blue-50"
        >
          View All
        </Button>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {listed.map((ipo, index) => (
          <div key={index} className="border rounded-xl p-4 shadow-sm bg-white">
            <h3 className="font-semibold text-blue-700 mb-1">{ipo.name}</h3>
            <p className="text-sm">IPO PRICE: ₹{ipo.price}</p>
            <p className="text-sm">LISTING DATE: {ipo.list}</p>
            <p className="text-sm">LISTING GAIN: {ipo.gain}</p>
            <p className="text-sm">CURRENT PRICE: ₹{ipo.current}</p>
            <div className="mt-2 flex gap-2">
              <span className="bg-gray-100 px-2 py-1 rounded text-xs">RHP</span>
              <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                DRHP
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Sections */}
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <div className="bg-white border rounded-xl p-4 shadow-sm">
          <h4 className="text-base font-semibold mb-2">IPO News</h4>
          <ul className="text-sm space-y-1 text-gray-600">
            <li>Droneacharya IPO listing date: 23rd Jan 2024</li>
            <li>eMudhra IPO listing date: 10th Jan 2024</li>
          </ul>
        </div>
        <div className="bg-white border rounded-xl p-4 shadow-sm">
          <h4 className="text-base font-semibold mb-2">IPO Analysis</h4>
          <ul className="text-sm space-y-1 text-gray-600">
            <li>Read about top IPO strategies and when to enter</li>
            <li>Complete guide on choosing the best Demat account</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
