import { ArrowRight } from "lucide-react";

interface ContinueButtonProps {
  onClick?: () => void;
}

export default function ContinueButton({ onClick }: ContinueButtonProps) {
  return (
    <button
      onClick={onClick}
      className="py-2.5 px-4 rounded-md font-medium transition-colors duration-200 bg-blue-600 hover:bg-blue-700 text-white flex items-center"
    >
      Continue <ArrowRight className="h-4 w-4 ml-2" />
    </button>
  );
}
