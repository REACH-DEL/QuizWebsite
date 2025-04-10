import NavbarContent from '@/components/layout/Navbar'
import Sidebar from '@/components/layout/Sidebar'
import React from 'react'

export default function layout({ children }) {
    return (
        <>
            <main className="flex w-full">
                <Sidebar />
                <div className="grow">
                    <div className="md:col-span-5 flex flex-col justify-between  overflow-y-auto bg-gray-100 dark:bg-gray-900">
                        <NavbarContent status={false} />
                    </div>
                    {children}
                </div>
            </main>
        </>
    )
}