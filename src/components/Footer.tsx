import { recommendedPlaylists } from "@/data/data";
import { ListMusicIcon, Maximize2, Mic2, MonitorSpeaker, Pause, Repeat2, Shuffle, SkipBack, SkipForward, Volume1 } from "lucide-react";
import Image from "next/image";

export function Footer(){
    return(
        <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        <div className='flex items-center gap-3'>
          <Image src={recommendedPlaylists[0].caminho} width={56} height={56} alt='Imagem Album'/>
          <div className='flex flex-col'>
            <p>Señores Del Mar (Wield the Sword)</p>
            <span className='text-xs text-zinc-400'>Edu Falaschi</span>
         </div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='flex items-center gap-6'>
            <Shuffle size={20} className='text-zinc-300'/>
            <SkipBack size={20} className='text-zinc-300'/>
            <button className='w-10 h-10 flex items-center justify-center rounded-full bg-white text-black'> <Pause /> </button>           
            <SkipForward size={20} className='text-zinc-300'/>
            <Repeat2 size={20} className='text-zinc-300'/>
          </div>

          <div className='"flex items-center gap-2'>
            <span className='text-xs text-zinc-500'>2:11</span>
            <div className='h-1 rounded-full w-96 bg-zinc-600'>
              <div className='h-1 bg-zinc-100 w-40'></div>
            </div>
            <span className='text-xs text-zinc-500'>6:47</span>
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <Mic2 size={20}/>
          <ListMusicIcon size={20}/>
          <MonitorSpeaker size={20} />
          <Volume1 size={20}/>
          <div className='h-1 rounded-full w-28 bg-zinc-600'>
              <div className='h-1 bg-zinc-100 w-16'></div>
          </div>
          <Maximize2 size={20}/>
        </div>
      </footer>
    )
}