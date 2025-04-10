import React from 'react'
import "../../app/globals.css"
import MainSideBar from './MainSideBar'

export default function Sidebar() {
  return (
    <div className=" min-w-85 h-screen sticky top-0  bg-gray-100 dark:bg-gray-900">
      <aside className="flex flex-col max-w-full h-screen px-5  py-4 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
        <a href="#">
          <img
            className="w-auto h-13 px-3"
            src="/assets/image/icon.svg"
            alt=""
          />
        </a>
        <div className="flex flex-col justify-between  flex-1 mt-5 border-t py-3">
          <nav className="space-y-3 px-3">
            <MainSideBar />
          </nav>
        </div>
      </aside>
    </div>
  )
}
