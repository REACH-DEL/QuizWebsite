import Footer from '@/components/layout/footer';
import LandingHeader from '@/components/layout/LandingHeader';
import React from 'react'
export default function LandingLayout({ children }) {
    return (
        <>
            <LandingHeader />
            <main>
                {children}
                <Footer/>
            </main>
        </>
    );
}
