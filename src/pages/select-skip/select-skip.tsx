import SelectSkipHeader from "./components/select-skip-header";
import SelectSkipCard from "./components/select-skip-card";
import SelectSkipConfirmation from "./components/select-skip-confirmation";
import { useGetData } from "../../api/queries/data";
import { Loader2 } from "lucide-react";

export default function SkipSelectionPage() {
  const { data, isLoading, error } = useGetData();

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

  return (
    <div className="min-h-screen  text-white">
      <div className="container mx-auto px-4 pb-42 md:pb-24">
        <SelectSkipHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading && <p className="text-center">Loading...</p>}
          {error && <p className="text-center text-red-500">Error: {error}</p>}
          {data.map((skip) => (
            <SelectSkipCard key={skip.id} skip={skip} />
          ))}
        </div>
      </div>
      <SelectSkipConfirmation />
    </div>
  );
}
