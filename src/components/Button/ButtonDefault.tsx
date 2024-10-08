import { ReactNode } from "react";

interface Props {
  text: string;
  size: "sm" | "lg";
  icon?: ReactNode;
  iconPlace?: "front" | "behind";
  onClick?: () => void;
  fullWidth?: boolean;
  disabled?: boolean;
}

const ButtonDefault = ({
  text,
  size,
  icon,
  iconPlace,
  onClick,
  fullWidth,
  disabled,
}: Props) => {
  const paddingSize = size === "sm" ? "w-[100px] py-1" : "w-[250px] py-[6px]";
  const textSize = size === "sm" ? "text-sm" : "text-lg";

  return (
    <button
      className={`flex justify-center items-center gap-2 border rounded-3xl bg-neutral-200 text-blue-900 hover:bg-blue-500 hover:text-blue-200 border-blue-900 ${textSize} ${paddingSize} ${
        fullWidth && "w-full"
      }`}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {iconPlace === "front" && icon}
      {text}
      {iconPlace === "behind" && icon}
    </button>
  );
};

export default ButtonDefault;
