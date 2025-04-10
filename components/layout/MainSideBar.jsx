"use client"
import React from 'react'
import Link from 'next/link'
import { ArchiveBox, FolderFavorite, Home2 } from 'iconsax-react'
import { usePathname } from 'next/navigation';

export default function MainSideBar() {
    const pathname = usePathname();
    
    const isActive = (path) => {
        return pathname === path ? 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200' : ''
    }
    
    return (
        <>
            {/* Home link */}
            <Link
                className={`flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300  dark:hover:bg-gray-800 dark:hover:text-gray-200  ${isActive('/home')}`}
                href="/home"
            >
                <Home2 variant="outline" color="#000000" size={22} />
                <span className="mx-2 text-sm font-medium text-black">Home</span>
            </Link>

            {/* Your Quiz link */}
            <Link
                className={`flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300  dark:hover:bg-gray-800 dark:hover:text-gray-200  ${isActive('/your-quiz')}`}
                href="/your-quiz"
            >
                <FolderFavorite variant="outline" color="#000000" size={22} />
                <span className="mx-2 text-sm font-medium text-black">Your Quiz</span>
            </Link>

            {/* History link */}
            <Link
                className={`flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300  dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 ${isActive('/history')}`}
                href="/history"
            >
                <ArchiveBox variant="outline" color="#000000" size={22} />
                <span className="mx-2 text-sm font-medium text-black">History</span>
            </Link>
        </>
    )
}