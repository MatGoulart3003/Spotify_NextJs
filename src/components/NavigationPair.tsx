import { ChevronLeft, ChevronRight } from "lucide-react";

export function NavigationPair (){
    return (
        <div className='flex items-center gap-3'>
            <button className= 'rounded-full bg-black/60 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/60 p-1'>
              <ChevronRight />
            </button>
          </div> 
    )
}