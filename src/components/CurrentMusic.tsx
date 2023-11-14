import { recommendedPlaylists } from "@/data/data";
import Image from "next/image";

export function CurrentMusic(){
    return (
        <div className='flex items-center gap-3'>
          <Image src={recommendedPlaylists[0].caminho} width={56} height={56} alt='Imagem Album'/>
          <div className='flex flex-col'>
            <p>Señores Del Mar (Wield the Sword)</p>
            <span className='text-xs text-zinc-400'>Edu Falaschi</span>
         </div>
        </div>
    )
}