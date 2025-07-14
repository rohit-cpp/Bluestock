import { Button } from "@/components/ui/button";

export default function IpoFilter({ onSort }) {
  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        onClick={() => onSort("asc")}
        className="text-sm"
      >
        Sort: Low to High
      </Button>
      <Button
        variant="outline"
        onClick={() => onSort("desc")}
        className="text-sm"
      >
        Sort: High to Low
      </Button>
    </div>
  );
}
