import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import axios from "axios";
import { PencilRuler } from "lucide-react"
import { useEffect, useState } from "react";

export function Size() {
    const [sizeData, setSizeData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://leaury.xpertprime.com/api/sizes');
                setSizeData(response.data);
            } catch (error) {
                setError(error);
            }
        };
        fetchData();
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>
    }

    if (!sizeData) {
        return <div>Loading...</div>
    }
  return (
    <Dialog className="">
      <DialogTrigger asChild> 
      <div className="flex flex-col mt-5 items-center justify-center w-16 h-16  cursor-pointer border border-[#1f1f1f] hover:border-slate-600 shadow hover:bg-white/60 group">
        <PencilRuler className='h-10 w-10 text-[#1f1f1f] group-hover:text-slate-600' strokeWidth={1} absoluteStrokeWidth={true} />
        <p className="text-xs uppercase text-[#1f1f1f] tracking-tight group-hover:text-slate-600">Size</p>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[435px] bg-white text-black">
        <DialogHeader>
          <DialogTitle>Select Shoe Size</DialogTitle>
          <DialogDescription className="text-black">
            Select the appropriate size for your Shoes
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-wrap gap-4 py-4 text-gray-800">
        {sizeData.data.map((item, index) => (
            <div key={index} className="w-10 h-10 border flex items-center justify-center rounded border-gray-700"><span className="text-xs font-semibold">{item.size}</span></div>
        ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
