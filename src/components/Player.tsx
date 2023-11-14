import { Pause, Repeat2, Shuffle, SkipBack, SkipForward } from "lucide-react";

export function Player(){
    return(
        <div className='flex items-center gap-6'>
         <Shuffle size={20} className='text-zinc-300'/>
         <SkipBack size={20} className='text-zinc-300'/>
         <button className='w-10 h-10 flex items-center justify-center rounded-full bg-white text-black'> <Pause /> </button>           
         <SkipForward size={20} className='text-zinc-300'/>
         <Repeat2 size={20} className='text-zinc-300'/>
        </div>
    )
}