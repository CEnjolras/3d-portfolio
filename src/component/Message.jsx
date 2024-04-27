export default function Message({children, className}) {
  return (
    <div className={`absolute w-[500px] max-w-[85%] bottom-32 left-0 right-0 m-auto z-20 ${className} text-white pointer-events-auto rounded-lg bg-black bg-opacity-70 shadow-lg ring-1 ring-black ring-opacity-5`}>
      <div className="p-4">
        <div className="flex items-start">
          <div className="shrink-0 pt-0.5 w-11"> 
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
              alt=""
            />
          </div>
          <div className="ml-3 text-white font-medium space-y-2">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
