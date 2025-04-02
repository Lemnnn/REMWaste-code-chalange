import SelectSkipHeader from "./components/select-skip-header";
import SelectSkipCard from "./components/select-skip-card";
import SelectSkipConfirmation from "./components/select-skip-confirmation";
import { useGetData } from "../../api/queries/data";
import { Loader2 } from "lucide-react";
import { useState } from "react";

export default function SkipSelectionPage() {
  const { data, isLoading, error } = useGetData();
  const [selectedSize, setSelectedSize] = useState("");

  if (isLoading) {
    return (
      <div className="min-h-screen text-white flex items-center justify-center">
        <Loader2 className="animate-spin h-10 w-10 text-white" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen  text-white flex items-center justify-center">
        <p>Error: {error.message}</p>
      </div>
    );
  }

  if (!Array.isArray(data) || data.length === 0) {
    return (
      <div className="min-h-screen  text-white flex items-center justify-center">
        <p>No skips available.</p>
      </div>
    );
  }

  const uniqueSizes = [...new Set(data.map((skip) => skip.size))].sort(
    (a, b) => a - b
  );

  const filteredSkips = selectedSize
    ? data.filter((skip) => String(skip.size) === selectedSize)
    : data;

  return (
    <div className="min-h-screen  text-white">
      <div className="container mx-auto px-4 pb-42 md:pb-24">
        <SelectSkipHeader />

        <div className="mb-4">
          <label className="text-white mr-2">Filter by Size:</label>
          <select
            className="p-2 bg-[#2A2A2A] text-white rounded-md"
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            <option value="">All</option>
            {uniqueSizes.map((size) => (
              <option key={size} value={String(size)}>
                {size} yards
              </option>
            ))}
          </select>
        </div>

        {filteredSkips.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {isLoading && <p className="text-center">Loading...</p>}
            {error && (
              <p className="text-center text-red-500">Error: {error}</p>
            )}
            {filteredSkips.map((skip) => (
              <SelectSkipCard key={skip.id} skip={skip} />
            ))}
          </div>
        ) : (
          <p className="text-center">No skips match the selected size.</p>
        )}
        <SelectSkipConfirmation />
      </div>
    </div>
  );
}
