import {
  AlertTriangle,
  ArrowRight,
  Ban,
  Calendar,
  CheckCircle2,
  Info,
} from "lucide-react";
import { useState } from "react";
import { useSkipContext } from "../../../context/SkipContext";
import { Skip } from "../../../types/types";

interface SkipCardProps {
  skip: Skip;
}

export default function SelectSkipCard({ skip }: SkipCardProps) {
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);

  const { selectedSkip, setSelectedSkip } = useSkipContext();

  const toggleTooltip = (id: number) => {
    setActiveTooltip(activeTooltip === id ? null : id);
  };

  return (
    <div
      className={`overflow-hidden transition-all duration-300 hover:shadow-lg rounded-lg ${
        selectedSkip?.id === skip.id
          ? "border-2 border-blue-600 bg-[#1C1C1C]"
          : "border border-gray-800 bg-[#1C1C1C] hover:border-gray-700"
      }`}
    >
      <div className="relative">
        <div className="absolute top-0 right-0 z-10">
          <span className="inline-block m-3 py-1.5 px-3 text-sm font-medium bg-black/70 text-white rounded-md">
            {skip.size} Yards
          </span>
        </div>
        <div className="h-48 overflow-hidden">
          <img
            src={
              "https://images.unsplash.com/photo-1523293915678-d126868e96f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt={`${skip.size} Yard Skip`}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {(!skip.allowed_on_road || !skip.allows_heavy_waste) && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-2 flex justify-center gap-2 ">
            {!skip.allowed_on_road && (
              <span className="inline-flex items-center text-xs bg-red-900/70 text-white px-2 py-1 rounded">
                <Ban className="w-3 h-3 mr-1" /> No Road Placement
              </span>
            )}
            {!skip.allows_heavy_waste && (
              <span className="inline-flex items-center text-xs bg-amber-900/70 text-white px-2 py-1 rounded">
                <AlertTriangle className="w-3 h-3 mr-1" /> No Heavy Waste
              </span>
            )}
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold">{skip.size} Yard Skip</h3>

          <div className="relative">
            <button
              className="h-8 w-8 text-slate-400 hover:text-white rounded-full flex items-center justify-center focus:outline-none"
              onClick={() => toggleTooltip(skip.id)}
              aria-label="More information"
            >
              <Info className="h-4 w-4" />
            </button>
            {activeTooltip === skip.id && (
              <div className="absolute right-0 z-50 w-64 p-3 mt-2 bg-gray-800 rounded-md shadow-lg text-sm">
                <p className="mb-1">
                  <strong>Hire Period:</strong> {skip.hire_period_days} days
                </p>
                {skip.transport_cost ? (
                  <p className="mb-1">
                    <strong>Transport Cost:</strong> £
                    {skip.transport_cost || "0"}
                  </p>
                ) : (
                  <p className="mb-1">
                    <strong>Transport Cost:</strong> n/a
                  </p>
                )}
                {skip.per_tonne_cost ? (
                  <p>
                    <strong>Per Tonne Cost:</strong> £{skip.per_tonne_cost}
                  </p>
                ) : (
                  <p>
                    <strong>Per Tonne Cost:</strong> n/a
                  </p>
                )}
                <div className="absolute w-3 h-3 bg-gray-800 transform rotate-45 -top-1.5 right-3"></div>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center text-slate-300">
            <Calendar className="w-4 h-4 mr-2 text-slate-400" />
            <span>{skip.hire_period_days} day hire period</span>
          </div>

          <div>
            <div className="text-2xl font-bold text-white">
              £
              {Math.round(
                skip.price_before_vat + (skip.price_before_vat * skip.vat) / 100
              )}
              <span className="text-sm font-normal text-slate-400 ml-1">
                inc. VAT
              </span>
            </div>
            <div className="text-xs text-slate-400">
              £{skip.price_before_vat} + VAT ({skip.vat}%)
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 pt-0">
        <button
          className={`w-full py-2.5 px-4 rounded-md font-medium transition-colors duration-200 flex items-center justify-center ${
            selectedSkip?.id === skip.id
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-[#2A2A2A] hover:bg-[#2A2A2A]/50 text-white border border-gray-700"
          }`}
          onClick={() => setSelectedSkip(skip)}
        >
          {selectedSkip?.id === skip.id ? (
            <>
              <CheckCircle2 className="mr-2 h-4 w-4" /> Selected
            </>
          ) : (
            <>
              Select This Skip <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
