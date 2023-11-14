import { playlists } from "@/data/data";
import { HomeIcon, Library, Search } from "lucide-react";

export function Sidebar(){

    return(
        <aside className="w-72 bg-black p-6">
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 rounded-full bg-red-500'></div>
            <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
            <div className='w-3 h-3 rounded-full bg-green-500'></div>
          </div>
          <nav className='space-y-5 mt-10'>
            <a className='flex items-center gap-3 text-sm font-semibold text-zinc-300' href=""> <HomeIcon/> Home</a>
            <a className='flex items-center gap-3 text-sm font-semibold text-zinc-300' href=""> <Search/> Search</a>
            <a className='flex items-center gap-3 text-sm font-semibold text-zinc-300' href=""> <Library/> Your Library</a>
          </nav>
          <nav className='mt-10 pt-10 border-t border-zinc-700 flex flex-col gap-3'>
            {playlists.map((item, index) => (
              <a key={index} href="" className='text-sm text-zinc-400 hover:text-zinc-100'>{item}</a>
            ))}            
          </nav>
        </aside>
    )
}