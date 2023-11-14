import { musicasSaudade } from "@/data/data";
import Image from "next/image";

export function SongsMissing (){
    return (

        <div className='grid grid-cols-7 gap-4 mt-4'>
            {musicasSaudade.map((item, index) =>(
              <a key={index} href="" className='bg-white/5 p-3 rounded items-center gap-3 overflow-hidden'>
                <Image src={item.img} className='w-full' width={100} height={100} alt='Imagem Album'/>
                <strong className='flex items-center my-3' >{item.title}</strong>
                <p className=' flex items-center text-sm text-zinc-500'> {item.description} </p> 
              </a>
            ))}
          </div>  

    )
}