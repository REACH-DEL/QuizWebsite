import NavbarContent from '@/components/layout/Navbar'
import React from 'react'

export default function ResultLayout({ children }) {
    return (
        <>
            <main className="flex w-full">
                <div className="grow">
                    <div className="md:col-span-5 flex flex-col justify-between  overflow-y-auto bg-gray-100 dark:bg-gray-900">
                        <NavbarContent />
                    </div>
                    {children}
                </div>
            </main>
        </>
    )
}