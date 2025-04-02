import { ArrowLeft, ArrowRight, Truck } from "lucide-react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { OutletContext } from "../../../types/types";
import { useSkipContext } from "../../../context/SkipContext";

export default function SelectSkipConfirmation() {
  const { setCurrentStep } = useOutletContext<OutletContext>();
  const navigate = useNavigate();

  const { selectedSkip, setSelectedSkip } = useSkipContext();

  const handleContinue = () => {
    setCurrentStep(4);
    navigate("/permit-check");
  };

  const handleBack = () => {
    setCurrentStep(2);
    navigate("/waste-type");
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-20 bg-[#1C1C1C] border-t border-gray-800 transition-transform duration-300 ease-in-out ${
        selectedSkip ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 py-4 ">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center mb-4 sm:mb-0">
            {selectedSkip && (
              <>
                <div className="bg-blue-600 rounded-full p-2 mr-3">
                  <Truck className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium text-white">
                    You've selected a{" "}
                    <span className="font-bold">
                      {selectedSkip.size} Yard Skip
                    </span>
                  </p>
                  <p className="text-slate-400 text-sm">
                    £
                    {Math.round(
                      selectedSkip.price_before_vat +
                        (selectedSkip.price_before_vat * selectedSkip.vat) / 100
                    )}{" "}
                    inc. VAT • {selectedSkip.hire_period_days} day hire period
                    {!selectedSkip.allowed_on_road &&
                      " • Not for road placement"}
                    {!selectedSkip.allows_heavy_waste &&
                      " • Not for heavy waste"}
                  </p>
                </div>
              </>
            )}
          </div>
          <div className="flex space-x-3">
            <button
              className="py-2.5 px-4 rounded-md font-medium transition-colors duration-200 bg-white border border-gray-700 text-black hover:bg-white/80 flex items-center"
              onClick={() => {
                handleBack();
                setSelectedSkip(null);
              }}
            >
              <ArrowLeft className="h-4 w-4 mr-2" /> Back
            </button>
            <button
              onClick={handleContinue}
              className="py-2.5 px-4 rounded-md font-medium transition-colors duration-200 bg-blue-600 hover:bg-blue-700 text-white flex items-center"
            >
              Continue <ArrowRight className="h-4 w-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
