export default function Tag({ children, ...props }) {
  return (
    <div
      className="flex items-center rounded-full bg-indigo-400/20 px-3 py-1 text-xs font-medium leading-5 text-indigo-300 "
      {...props}
    >
      {children}
    </div>
  );
}
