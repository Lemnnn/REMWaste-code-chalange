import { useNavigate, useOutletContext } from "react-router-dom";
import BackButton from "../../components/shared/back-button";
import { OutletContext } from "../../types/types";
import { useSkipContext } from "../../context/SkipContext";
import { Truck } from "lucide-react";

export default function PermitCheck() {
  const { setCurrentStep } = useOutletContext<OutletContext>();
  const { selectedSkip } = useSkipContext();
  const navigate = useNavigate();

  const handleBack = () => {
    setCurrentStep(3);
    navigate("/select-skip");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white gap-20">
      <div className="text-4xl font-bold">Dummy Permit Check</div>
      {selectedSkip && (
        <div className="flex items-center mb-4">
          <div className="bg-blue-600 rounded-full p-2 mr-3">
            <Truck className="h-6 w-6" />
          </div>
          <div>
            <p className="font-medium text-white">
              You've selected a{" "}
              <span className="font-bold">{selectedSkip.size} Yard Skip</span>
            </p>
            <p className="text-slate-400 text-sm">
              £
              {Math.round(
                selectedSkip.price_before_vat +
                  (selectedSkip.price_before_vat * selectedSkip.vat) / 100
              )}{" "}
              inc. VAT • {selectedSkip.hire_period_days} day hire period
              {!selectedSkip.allowed_on_road && " • Not for road placement"}
              {!selectedSkip.allows_heavy_waste && " • Not for heavy waste"}
            </p>
          </div>
        </div>
      )}
      <BackButton onClick={handleBack} />
    </div>
  );
}
