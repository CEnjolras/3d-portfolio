import avatar from '../assets/man.webp'

export default function Message({children, className}) {
  return (
    <div className={`absolute w-[500px] max-w-[85%] bottom-20 lg:bottom-32 left-0 right-0 m-auto z-20 ${className} text-white pointer-events-auto rounded-lg bg-black bg-opacity-70 shadow-lg ring-1 ring-black ring-opacity-5`}>
      <div className="p-4">
        <div className="flex items-start">
          <div className="shrink-0 pt-0.5 w-12"> 
            <img
              className="h-11 w-11 rounded-full"
              src={avatar}
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
