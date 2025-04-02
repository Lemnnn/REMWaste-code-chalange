import { Outlet } from "react-router-dom";
import Stepper from "../shared/stepper";
import { useState } from "react";

export default function AppLayout() {
  const [currentStep, setCurrentStep] = useState(3);

  return (
    <div className="relative min-h-screen flex-col antialiased">
      <Stepper currentStep={currentStep} setCurrentStep={setCurrentStep} />
      <main className="min-h-screen bg-[#121212] text-white">
        <Outlet context={{ setCurrentStep }} />
      </main>
    </div>
  );
}
