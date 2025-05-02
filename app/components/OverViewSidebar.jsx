import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { CardDemo } from "./OverViewCard"
import { ListChecks } from "lucide-react"
import { useContext } from "react";
import StoreContext from "../context/Store";

export function OverViewSidebar() {
  const { state, actions } = useContext(StoreContext);
  return (
    <Sheet key={"left"}>
      <SheetTrigger asChild>
        <div className="flex flex-col mt-5 items-center justify-center w-16 h-16  cursor-pointer border border-[#1f1f1f] hover:border-slate-600 shadow hover:bg-white/60 group">
          <ListChecks className='h-10 w-10 text-[#1f1f1f] group-hover:text-slate-600' strokeWidth={1} absoluteStrokeWidth={true} />
          <p className="text-xs uppercase text-[#1f1f1f] tracking-tight group-hover:text-slate-600">Overview</p>
        </div>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <div className="grid gap-4 py-4 max-h-[90vh] overflow-y-auto cute-scrollbar">
          <CardDemo data={state.leatherTexture} label="Leather"/>
          <CardDemo data={state.soleTexture} label="Sole"/>
          <CardDemo data={state.leatherTexture} label="Heal"/>
          <CardDemo data={state.leatherTexture} label="Inner Sole"/>
        </div>
      </SheetContent>
    </Sheet>
  )
}
