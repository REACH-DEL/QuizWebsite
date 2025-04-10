'use client'

import { deleteUserQuiz } from "@/services/quiz-service";  // Ensure this import is correct
import { More } from "iconsax-react";
import { Pencil, Trash2 } from "lucide-react";

export default function PopMe() {  // For debugging purposes

    return (
        <div className="relative group">
            <More
                size={32}
                color="#000000"
                className="absolute top-2 right-9 bg-white rounded-full cursor-pointer"
            />

            {/* Dropdown shown on hover */}
            <div className="absolute right-0 top-14 bg-white border rounded-md shadow-md w-40 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-200">
                <div className="flex flex-col">
                    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-t-md">
                        <div className="flex gap-2">
                            <Pencil color="#9c9695" /> Edit
                        </div>
                    </div>
                    <button
                        type="button"
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                        <div className="flex gap-2">
                            <Trash2 color="#cc4c37" /> Delete
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}
