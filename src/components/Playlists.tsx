import { playlists } from "@/data/data";

export function Playlists(){
    return(
        <nav className='mt-10 pt-10 border-t border-zinc-700 flex flex-col gap-3'>
            {playlists.map((item, index) => (
              <a key={index} href="" className='text-sm text-zinc-400 hover:text-zinc-100'>{item}</a>
            ))}            
        </nav>
    )
}