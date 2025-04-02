import {
  Calendar,
  CreditCard,
  MapPin,
  Shield,
  Trash,
  Truck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const steps = [
  { id: 1, name: "Postcode", icon: <MapPin />, path: "/postcode" },
  { id: 2, name: "Waste Type", icon: <Trash />, path: "/waste-type" },
  { id: 3, name: "Select Skip", icon: <Truck />, path: "/select-skip" },
  { id: 4, name: "Permit Check", icon: <Shield />, path: "/permit-check" },
  { id: 5, name: "Choose Date", icon: <Calendar />, path: "/choose-date" },
  { id: 6, name: "Payment", icon: <CreditCard />, path: "/payment" },
];

interface StepperProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

export default function Stepper(currentStepProps: StepperProps) {
  const { currentStep, setCurrentStep } = currentStepProps;

  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center bg-[#121212] p-4">
      <div className="flex space-x-2 md:space-x-3 lg:space-x-6">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center space-x-2">
            <button
              className={`flex items-center space-x-2 text-sm font-medium transition ${
                step.id <= currentStep
                  ? "text-blue-500 hover:text-blue-400"
                  : "text-gray-500 cursor-default"
              }`}
              onClick={() => {
                if (step.id <= currentStep) navigate(step.path);
                setCurrentStep(step.id);
              }}
              disabled={step.id > currentStep}
            >
              <span
                className={`p-1 md:p-2 rounded-full ${
                  step.id <= currentStep
                    ? "bg-blue-500 text-white"
                    : "bg-gray-700 text-gray-500"
                }`}
              >
                {step.icon}
              </span>
              <span className="hidden md:block">{step.name}</span>
            </button>

            {index < steps.length - 1 && (
              <span
                className={`w-2 md:w-5 lg:w-10 h-0.5 ${
                  step.id < currentStep ? "bg-blue-500" : "bg-gray-700"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
