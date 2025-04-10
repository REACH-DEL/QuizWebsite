import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ButtonGoto() {
  return (
    <Link href={"/home"} className="flex gap-2 rounded-2xl py-2 px-4 w-fit border border-[#3A86FF]">
      <ArrowLeft size={20} color="#3A86FF" />
      <p className="text-[#3A86FF]">Go to Homepage</p>
    </Link>
  );
}