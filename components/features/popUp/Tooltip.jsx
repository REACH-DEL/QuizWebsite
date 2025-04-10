import { Trash } from "lucide-react";

export function Tooltip({ children, onDelete }) {
  return (
    <div className="relative group w-full">
      {children}
      <div className="absolute top-1 -right-18 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <div
          onClick={onDelete}
          className="bg-white border p-2 rounded-full shadow-md cursor-pointer"
        >
          <Trash color="#FF0000" size={20} />
        </div>
      </div>
    </div>
  );
}
