import { useNavigate, useOutletContext } from "react-router-dom";
import ContinueButton from "../../components/shared/continue-button";
import { OutletContext } from "../../types/types";

export default function Postcode() {
  const { setCurrentStep } = useOutletContext<OutletContext>();
  const navigate = useNavigate();

  const handleContinue = () => {
    setCurrentStep(2);
    navigate("/waste-type");
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen text-white">
      <div className="text-4xl font-bold">Dummy Postcode</div>
      <ContinueButton onClick={handleContinue} />
    </div>
  );
}
