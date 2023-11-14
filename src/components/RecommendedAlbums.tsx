import { recommendedPlaylists } from "@/data/data";
import { Play } from "lucide-react";
import Image from "next/image";

export function RecommendedAbums (){
    return (
        <div className='grid grid-cols-3 gap-4 mt-4'>
          {recommendedPlaylists.map((item, index) => (
            <a href='' key={index} className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src={item.caminho} width={104} height={104} alt='Imagem Album'/>
              <strong className='text-sm text-zinc-400 hover:text-zinc-100'>{item.name}</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'> <Play /> </button>           
            </a>
          ))} 
        </div>
    )
}