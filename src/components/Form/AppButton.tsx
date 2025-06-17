import React from "react";

type ButtonType = "primary" | "secondary"

interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  className?: string;
  buttonType?: ButtonType;
}

const buttonTypeClasses: Record<ButtonType, string> = {
  primary: "bg-[#F50000] text-white",
  secondary: "bg-gray-200 text-black",
};

const AppButton: React.FC<AppButtonProps> = ({ 
   label, 
   className = "", 
   buttonType = "primary", 
   ...rest 
  }) => {
  const baseClasses = "rounded-full font-semibold px-8 py-2";
  const selectedTypeClass = buttonTypeClasses[buttonType];

   return (
      <button 
         type="button" 
         className={`${baseClasses} ${selectedTypeClass} ${className}`}
         {...rest}>
         {label}
      </button>
   );
};

export default AppButton;