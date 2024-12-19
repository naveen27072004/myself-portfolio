import React from 'react'

const Sidenav = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="relative">
      <img
        src="https://via.placeholder.com/300x300"
        alt="Profile"
        className="w-full h-48 object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 py-4 px-6">
        <h3 className="text-xl font-bold">Monalisa Ashley</h3>
        <p className="text-gray-600">UI/UX Designer</p>
      </div>
    </div>
    <div className="p-6 space-y-4">
      <p>
        I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
      </p>
      <div className="grid grid-cols-3 gap-4 text-center">
        <a href="#" className="text-pink-500 hover:text-pink-700">
          About
        </a>
        <a href="#" className="text-pink-500 hover:text-pink-700">
          Resume
        </a>
        <a href="#" className="text-pink-500 hover:text-pink-700">
          Contact
        </a>
      </div>
      <div className="flex justify-between">
        <a href="#" className="text-pink-500 hover:text-pink-700">
          Works
        </a>
        <a href="#" className="text-pink-500 hover:text-pink-700">
          Blogs
        </a>
      </div>
    </div>
  </div>
  )
}

export default Sidenav