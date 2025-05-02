import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ShoppingCart } from "lucide-react"

export function OrderForm() {
  return (
    <Dialog className="">
      <DialogTrigger asChild>
        <div className="flex flex-col mt-5 items-center justify-center w-16 h-16  cursor-pointer border border-[#1f1f1f] hover:border-slate-600 shadow hover:bg-white/60 group">
          <ShoppingCart className='h-10 w-10 text-[#1f1f1f] group-hover:text-slate-600' strokeWidth={1} absoluteStrokeWidth={true} />
          <p className="text-xs uppercase text-[#1f1f1f] group-hover:text-slate-600 tracking-tighter">CheckOut</p>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white text-black">
        <DialogHeader>
          <DialogTitle>Place Order</DialogTitle>
          <DialogDescription className="text-black">
            Enter your Details Accurately to deliver your order on your doorsteps
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 text-gray-800">
          <form>
            <div class="form-item">
              <input type="text" id="name" autocomplete="off" required />
              <label for="name">Name</label>
            </div>
            <div class="form-item">
              <input type="text" id="email" autocomplete="off" required />
              <label for="email">Email</label>
            </div>
            <div class="form-item">
              <input type="text" id="contact" autocomplete="off" />
              <label for="contact">Contant #</label>
            </div>
            <div class="form-item">
              <input type="text" id="address" autocomplete="off" />
              <label for="address">Address</label>
            </div>
            <div class="form-item">
              <input type="text" id="address2" autocomplete="off" />
              <label for="address2">Address Line 2</label>
            </div>
            <div class="form-item">
              <input type="text" id="postal" autocomplete="off" />
              <label for="postal">Postal code</label>
            </div>
            <div class="form-item">
              <input type="text" id="city" autocomplete="off" />
              <label for="city">City</label>
            </div>
          </form>
        </div>
        <DialogFooter>
          <Button type="submit" className="bg-white border-2 border-[#9a9a9a] hover:bg-[#9a9a9a] text-black">Place Order</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
