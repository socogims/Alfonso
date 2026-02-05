export default function Button({ children, variant = "primary", className = "", ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold transition";

  const variants = {
    primary: "bg-[#A91C1A] hover:bg-[#8E1715] text-white",
    outline:
      "border border-white/30 text-white hover:bg-white/10",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
