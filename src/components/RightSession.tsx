import { ListMusicIcon, Maximize2, Mic2, MonitorSpeaker, Volume1 } from "lucide-react";

export function RightSession(){
    return (
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
    )
}