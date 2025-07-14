import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { ChevronDown, ChevronRight, Grid3x3 } from "lucide-react";
import BlustockLogo from "@/assets/logo (1).png";

export default function Header() {
  return (
    <header className="bg-white shadow-sm px-4 md:px-8 py-3 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <img src={BlustockLogo} alt="Bluestock Logo" className="h-7" />
      </div>

      {/* Center: Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
        <a href="#">IPO</a>
        <a href="#">Community</a>

        <div className="flex items-center gap-1 cursor-pointer">
          <span>Products</span>
          <ChevronDown size={14} />
        </div>

        <div className="flex items-center gap-1 cursor-pointer">
          <span>Brokers</span>
          <ChevronRight size={14} />
        </div>

        <a href="#" className="flex items-center gap-1">
          <span>Live News</span>
          <span className="bg-blue-600 text-white text-[10px] px-1.5 py-0.5 rounded">
            NEW
          </span>
        </a>
      </nav>

      {/* Right: Auth Buttons + Sheet */}
      <div className="flex items-center gap-3">
        <span className="hidden md:inline text-sm text-gray-600">Sign In</span>
        <Button size="sm" className="hidden md:inline">
          Sign Up Now
        </Button>

        {/* Sheet Menu Icon */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Grid3x3 className="w-5 h-5 text-gray-600" />
          </SheetTrigger>

          <SheetContent side="right" className="w-[250px]">
            <div className="mt-8 ml-8 flex flex-col gap-4 text-sm font-medium">
              <a href="#">IPO</a>
              <a href="#">Community</a>
              <a href="#">Products</a>
              <a href="#">Brokers</a>
              <a href="#">Live News</a>
              <a href="#">Sign In</a>
              <Button variant="outline">Sign Up Now</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
