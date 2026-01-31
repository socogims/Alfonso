export default function Button({ children, variant = "primary", className = "", ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold transition";

  const variants = {
    primary: "bg-orange-500 hover:bg-orange-600 text-white",
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
