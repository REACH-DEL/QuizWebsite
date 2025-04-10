import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function LandingPage() {
    return (
        <>
            <article className="mt-16 w-full">
                <section className="container mx-auto px-3 flex flex-col gap-7">
                    <h2 className="text-4xl font-medium text-[var(--secondary-text)] leading-12">
                        Engage, Learn & Challenge Yourself<br />
                        with Our Interactive Quiz Platform
                    </h2>
                    <p className="text-[var(--foreground-text)]">
                        Welcome to the ultimate Quiz Platform for students, teachers, and quiz enthusiasts! Create, test, and host<br />
                        live quizzes with a seamless, interactive experience.
                    </p>
                    <Link href="/login" className="rounded-md w-fit">
                        <Button className="cursor-pointer bg-[var(--primary-color)] hover:bg-blue-600 !px-7 py-4">
                            <span>Get Started</span>
                            <ArrowRight />
                        </Button>
                    </Link>
                </section>
                <section className="w-full py-24 relative">
                    <div className="container mx-auto flex w-full justify-center">
                        <Image src={"/assets/image/landing.jpg"} width={1024} height={731} alt="Landing" />
                    </div>
                    <div className="absolute top-24 left-0 -z-10">
                        <svg width="237" height="189" viewBox="0 0 237 189" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M234.604 187.918C234.604 187.918 237.09 160.096 224.273 147.682C211.791 135.593 185.125 138.439 185.125 138.439C185.125 138.439 149.33 143.857 128.492 130.098C92.9176 106.608 137.902 65.3508 109.412 32.8213C77.6835 -3.40542 0.581291 2.18722 0.581291 2.18722" stroke="url(#paint0_linear_2376_20796)" strokeWidth="2.63917" />
                            <defs>
                                <linearGradient id="paint0_linear_2376_20796" x1="0.317899" y1="4.91566" x2="270.123" y2="200.259" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#8572FF" />
                                    <stop offset="1" stopColor="#137CFF" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </section>
            </article>
        </>
    )
}
