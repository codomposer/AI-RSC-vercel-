import { twMerge } from "tailwind-merge"

export default function Button({
  children,
  type,
  disabled,
  classes,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: {
  children: React.ReactNode
  type?: "button" | "submit"
  disabled?: boolean
  classes?: string
  onClick?: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}) {
  return (
    <button
      className={twMerge(
        "flex items-center py-2 px-3 md:px-4 rounded-md bg-gradient-to-r from-[#EA893B] to-[#F4C21E] text-white font-semibold",
        classes
      )}
      onClick={onClick}
      type={type || "button"}
      disabled={disabled}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  )
}
