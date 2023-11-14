import { HomeIcon, Library, Search } from "lucide-react";

export function Navegation(){
    return (
        <nav className='space-y-5 mt-10'>
            <a className='flex items-center gap-3 text-sm font-semibold text-zinc-300' href=""> <HomeIcon/> Home</a>
            <a className='flex items-center gap-3 text-sm font-semibold text-zinc-300' href=""> <Search/> Search</a>
            <a className='flex items-center gap-3 text-sm font-semibold text-zinc-300' href=""> <Library/> Your Library</a>
        </nav>
    )
}