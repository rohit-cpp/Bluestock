// IPOPage.jsx

import FAQAccordion from "./FaqSection";
import NewListedIPOs from "./NewListed";
import OngoingIPOs from "./Ongoing";
import UpcomingIPOs from "./Upcoming";

export default function IPOPage() {
  return (
    <div className="bg-white py-8 px-4 md:px-16 text-gray-800">
      <h1 className="text-2xl font-bold mb-4">IPO</h1>
      <p className="text-sm text-gray-600 mb-8">
        Listing of IPOs that are currently active, open or upcoming.
      </p>

      <UpcomingIPOs />
      <OngoingIPOs />
      <NewListedIPOs />
      <FAQAccordion />
    </div>
  );
}
