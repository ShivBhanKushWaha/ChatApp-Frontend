import React from 'react'

const Message = () => {
  return (
    <>
        <div className="p-4">
        <div className="flex justify-end items-center">
          <div className="relative bg-blue-500 text-white px-4 py-2 rounded-2xl rounded-br-none max-w-sm">
            Calm down, Anakin.
          </div>
        </div>
        <div className="flex justify-start items-center">
          <div className="relative bg-blue-500 text-white px-4 py-2 rounded-2xl rounded-bl-none max-w-sm">
            Hello
          </div>
        </div>
      </div>
    </>
  )
}

export default Message