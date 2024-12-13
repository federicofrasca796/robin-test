import { IconProps } from "@/types/icons";

export default function IconArrowUpLeft({
  width = 24,
  height = 24,
  ...props
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      {...props}
    >
      <path
        d="M6.00005 19L19 5.99996M19 5.99996V18.48M19 5.99996H6.52005"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
