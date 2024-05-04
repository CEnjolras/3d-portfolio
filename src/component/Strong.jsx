export default function Strong({ children, className, underline, ...props }) {
  return (
    <strong
      className={`text-indigo-300 ${className} ${underline ? "underline underline-offset-2" : ""}`}
      {...props}
    >
      {children}
    </strong>
  );
}
