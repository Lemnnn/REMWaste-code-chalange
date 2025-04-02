import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  onClick?: () => void;
}

export default function BackButton({ onClick }: BackButtonProps) {
  return (
    <button
      onClick={onClick}
      className="py-2.5 px-4 rounded-md font-medium transition-colors duration-200 bg-white border  text-black hover:bg-white/80 flex items-center"
    >
      <ArrowLeft className="h-4 w-4 ml-2" />
      Back
    </button>
  );
}
