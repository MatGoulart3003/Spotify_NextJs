import { Footer } from '@/components/Footer'
import { Sidebar } from '@/components/Sidebar'
import { musicasSaudade, recommendedPlaylists } from '@/data/data'
import {ChevronLeft, ChevronRight, Play} from 'lucide-react'
import Image from 'next/image'


export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
     
        <Sidebar />

        <main className="flex-1 p-6">
          <div className='flex items-center gap-3'>
            <button className= 'rounded-full bg-black/60 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/60 p-1'>
              <ChevronRight />
            </button>
          </div>          
          <h1 className='font-semibold text-3xl mt-10' >Boa tarde</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
          {recommendedPlaylists.map((item, index) => (
            <a href='' key={index} className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src={item.caminho} width={104} height={104} alt='Imagem Album'/>
              <strong className='text-sm text-zinc-400 hover:text-zinc-100'>{item.name}</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'> <Play /> </button>           
            </a>
            ))} 
          </div>
          <h2 className='font-semibold text-2xl mt-10'>Suas músicas estão com saudade</h2>
          <div className='grid grid-cols-7 gap-4 mt-4'>
            {musicasSaudade.map((item, index) =>(
              <a key={index} href="" className='bg-white/5 p-3 rounded items-center gap-3 overflow-hidden'>
                <Image src={item.img} className='w-full' width={100} height={100} alt='Imagem Album'/>
                <strong className='flex items-center my-3' >{item.title}</strong>
                <p className=' flex items-center text-sm text-zinc-500'> {item.description} </p> 
              </a>
            )

            )}
          </div>
          
        </main>

      </div>

      <Footer/>

    </div>   
  )
}
