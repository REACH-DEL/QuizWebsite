import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function LandingHeader() {
    return (
        <>
            <div className="w-full">
                <header className="container mx-auto h-20 flex items-center justify-between">
                    <Image src="/assets/image/icon.svg" width={204} height={66} alt="Logo" />
                    <Link href="/login" className="rounded-md">
                        <Button className="cursor-pointer bg-[var(--primary-color)] hover:bg-blue-600 !px-7 py-4">Log in</Button>
                    </Link>
                </header>
            </div>
        </>
    );
}