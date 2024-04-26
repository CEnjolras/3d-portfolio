import { Fragment, useState } from 'react'
import { Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/20/solid'

export default function Message({children}) {
  return (
    <>
        <div className="z-20 absolute left-1/2 -translate-x-1/2 top-28">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
            <div className="text-white pointer-events-auto w-full rounded-lg bg-black bg-opacity-70 shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 pt-0.5">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3 flex-1">
                   {children}
                    <div className="mt-4 flex">
                      <button
                        type="button"
                        className="inline-flex items-center rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Accept
                      </button>
                      <button
                        type="button"
                        className="ml-3 inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      >
                        Decline
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}
