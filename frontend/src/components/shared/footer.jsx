import { Facebook, Twitter, Youtube, Instagram, Linkedin } from "lucide-react";
import startupLogo from "@/assets/startup-india-logo1-02-1024x265.webp";
import BlustockLogo from "@/assets/logo (1).png";

export default function Footer() {
  return (
    <footer className="bg-white border-t py-12 px-4 md:px-16 text-sm text-gray-700">
      {/* Top 5 Columns */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mb-10 text-left">
        {[
          {
            title: "Resources",
            items: [
              "Trading View",
              "NSE Holdings",
              "e-Voting CDSL",
              "e-Voting NSDL",
              "Market Timings",
            ],
          },
          {
            title: "Company",
            items: ["Careers", "Contact Us", "About Us", "Community", "Blogs"],
          },
          {
            title: "Offerings",
            items: [
              "Compare Broker",
              "Fin Calculators",
              "IPO",
              "All Brokers",
              "Products",
            ],
          },
          {
            title: "Links",
            items: [
              "Share Investor",
              "Mutual Funds",
              "Sitemap",
              "Indian Indices",
              "Bug Bounty Program",
            ],
          },
          {
            title: "Policy",
            items: [
              "Terms & Conditions",
              "Privacy Policy",
              "Refund Policy",
              "Disclaimer",
              "Trust & Security",
            ],
          },
        ].map((section, i) => (
          <div key={i}>
            <h4 className="font-semibold mb-2">{section.title}</h4>
            <ul className="space-y-1">
              {section.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bluestock Info & Disclaimer */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-28 mb-10">
        <div>
          <div className="flex space-x-3 mb-4">
            <a href="#">
              <Twitter size={18} />
            </a>
            <a href="#">
              <Facebook size={18} />
            </a>
            <a href="#">
              <Linkedin size={18} />
            </a>
            <a href="#">
              <Instagram size={18} />
            </a>
            <a href="#">
              <Youtube size={18} />
            </a>
          </div>
          <div>
            <img src={BlustockLogo} alt="Bluestock Logo" className="mb-2 h-4" />

            <p className="text-xs leading-5 text-left ml-2">
              Bluestock Fintech
              <br />
              Pune, Maharashtra
              <br />
              SEBI Registration No:
              <br />
              LUMA/FPN-MH-123/2023
            </p>

            <img src={startupLogo} alt="Startup India" className="h-12 mt-2" />
          </div>
        </div>

        <div className="text-xs text-gray-600 space-y-3 mt-6 lg:mt-8 text-left">
          <p>
            Investments in securities markets are subject to market risks, read
            all the related documents carefully before investing as prescribed
            by SEBI, issued in the interest of the investors.
          </p>

          <p>
            The users can write to{" "}
            <a
              href="mailto:help@bluestock.in"
              className="text-blue-600 underline"
            >
              help@bluestock.in
            </a>{" "}
            for any app, website-related queries. Also you can send IT / tech
            related feedback to{" "}
            <a
              href="mailto:tech@bluestock.in"
              className="text-blue-600 underline"
            >
              tech@bluestock.in
            </a>
            .
          </p>

          <p>
            Disclaimer: We are not a SEBI registered research analyst company.
            We do not provide any kind of stock recommendations, buy/sell calls,
            tips, or investment and trading advice. All the stock scripts shown
            in the Bluestock app, website, and social media handles are for
            educational purposes only.
          </p>

          <p>
            Before making any investment in the financial market, it is
            advisable to consult with your financial advisor. Remember that
            stock markets are subject to market risks.
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t pt-4 text-center text-xs text-gray-500">
        Bluestock Fintech. All rights reserved.
        <br />
        <span className="inline-block mt-1">
          Made with ❤️ in Pune, Maharashtra
        </span>
      </div>
    </footer>
  );
}
