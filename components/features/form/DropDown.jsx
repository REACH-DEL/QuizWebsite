import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Calendar } from "lucide-react"

export function DateDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Calendar/>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 mr-10 mt-3">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Yesterday
          </DropdownMenuItem>
          <DropdownMenuItem>
            Last week
          </DropdownMenuItem>
          <DropdownMenuItem>
            Last month
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
