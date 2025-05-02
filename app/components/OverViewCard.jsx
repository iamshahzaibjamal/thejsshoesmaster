// import { BellIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {SquareX, X } from "lucide-react"
import Image from "next/image"

export function CardDemo({ className, data, label, ...props }) {
  return (
    <Card className={cn("w-[320px]", className)} {...props}>
      <CardHeader>
        <CardTitle>{label}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-2">
          <Image src={data.texture} alt="icon" width={50} height={50} />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
            {label==="Leather"?  data.leatherType: label}
            </p>
            <p className="text-sm text-muted-foreground">
            {data.name}
            </p>
          </div>
          <div className="h-full">
          <X strokeWidth={1} className="h-5 w-5 pr-1 cursor-pointer" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
