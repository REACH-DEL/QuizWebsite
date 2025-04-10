
import React from 'react';
import Profile from './Profile';


export default async function NavbarContent({ status = true }) {
    return (
        <nav className="bg-white max-w-full px-10 py-2 border-b border-gray-200  shadow-sm">
            <div className="flex items-center justify-between py-2 px-10 sticky top-0">

                <div className="flex-1">
                    {
                        status && (
                            <img src="/assets/image/icon.svg" alt="" />
                        )}
                </div>

                <Profile />
            </div>
        </nav>
    );
}