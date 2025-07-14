import { Input } from "@/components/ui/input";

export default function SearchBar({ onSearch }) {
  return (
    <Input
      type="text"
      placeholder="Search by IPO Company Name..."
      onChange={(e) => onSearch(e.target.value)}
      className="w-full max-w-sm"
    />
  );
}
