export default function Button({to, children, navigate}) {
  return (
    <div className="z-100 mt-4 flex">
      <button
        onClick={() => { navigate(to);}}
        type="button"
        className="inline-flex items-center rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        {children}
      </button>
    </div>
  );
}
