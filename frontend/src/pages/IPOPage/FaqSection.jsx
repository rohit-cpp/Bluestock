// FAQAccordion.jsx
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "What is an IPO?",
    answer:
      "IPO or Initial Public Offering is the first time a company issues its shares to the public. As an investor, you will now be able to subscribe for such shares via the IPO window. One can apply via specific brokers and platforms like Bluestock by opening a Demat account.",
  },
  {
    question: "How to invest in an IPO?",
    answer:
      "You can invest in an IPO by opening a Demat account and applying via brokers or online platforms during the IPO window.",
  },
  {
    question: "What is the benefit of an IPO?",
    answer:
      "Potential early investment opportunity, higher returns, and the ability to invest in future growth companies.",
  },
  {
    question: "What are the disadvantages of an IPO?",
    answer:
      "Market volatility, risk of poor listing, and lack of historical data to analyze the stock.",
  },
  {
    question:
      "What is the difference between book building issue and fixed price issue?",
    answer:
      "Book building is demand-driven price discovery. Fixed price is predetermined and disclosed upfront.",
  },
  {
    question: "Is it mandatory to have a PAN number to apply in an IPO?",
    answer:
      "Yes, PAN is mandatory as per SEBI guidelines to apply for any IPO.",
  },
  {
    question: "Where do I get an IPO application form?",
    answer: "From your broker or online application platforms.",
  },
  {
    question: "How one can apply in IPO’s online?",
    answer:
      "By logging in to the broker portal or apps like Bluestock and filling IPO application online.",
  },
  {
    question: "How one can apply in IPO’s offline?",
    answer:
      "By collecting physical application forms and submitting them to your broker.",
  },
  {
    question: "Can a minor apply in an IPO?",
    answer: "Yes, with a guardian-operated Demat account.",
  },
  {
    question: "What is the procedure to withdraw from an IPO?",
    answer:
      "You can withdraw your application before the closing date using broker portal.",
  },
  {
    question: "How is IPO return calculated?",
    answer:
      "Based on listing price minus IPO price, divided by IPO price (percentage gain/loss).",
  },
  {
    question:
      "Can one apply for an IPO from a sweep in/out saving bank account?",
    answer: "Yes, if your bank is supported and allows ASBA facility.",
  },
  {
    question:
      "What is the minimum and maximum investment one could do in the HNI category?",
    answer: "Minimum ₹2 lakh and no defined upper limit.",
  },
  {
    question: "How to apply more than one application in an IPO?",
    answer:
      "Each PAN can apply once. Multiple family members with unique PANs can apply individually.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="my-12">
      <h2 className="text-xl font-semibold mb-2">
        Frequently Asked Questions?
      </h2>
      <p className="text-sm text-gray-600 mb-6">
        Find answers to common questions that come to your mind related to IPO.
      </p>

      <div className="divide-y border rounded-md overflow-hidden">
        {faqData.map((faq, index) => (
          <div key={index}>
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center py-3 px-4 bg-white hover:bg-gray-50 text-left text-sm font-medium"
            >
              {faq.question}
              {openIndex === index ? (
                <ChevronUp size={18} />
              ) : (
                <ChevronDown size={18} />
              )}
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 pt-1 text-sm text-left text-gray-600 leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
