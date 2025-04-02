import { useNavigate, useOutletContext } from "react-router-dom";
import ContinueButton from "../../components/shared/continue-button";
import BackButton from "../../components/shared/back-button";
import { OutletContext } from "../../types/types";

export default function WasteType() {
  const { setCurrentStep } = useOutletContext<OutletContext>();
  const navigate = useNavigate();

  const handleContinue = () => {
    setCurrentStep(3);
    navigate("/select-skip");
  };

  const handleBack = () => {
    setCurrentStep(1);
    navigate("/postcode");
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen text-white">
      <p className="text-4xl font-bold">Dummy Waste Type</p>
      <div className="flex gap-4">
        <BackButton onClick={handleBack} />
        <ContinueButton onClick={handleContinue} />
      </div>
    </div>
  );
}
