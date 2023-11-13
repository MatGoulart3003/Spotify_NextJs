import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play} from 'lucide-react'
import Image from 'next/image'

const playlists = ["Daily Music", "This is Metallica", "This is Edu Falaschi", "Eldorado"]
const recommendedPlaylists = [{ name: "Eldorado", caminho: '/Eldorado.webp'},
 {name:"Musicas para Codar", caminho: '/imageCode.jpg'}, 
 {name:"Musicas Curtidas", caminho: '/musicasCurtidas.jpeg'},
 {name:"Mega Funk 2023", caminho: '/megaFunk.png'},
 {name:"72 Seasons", caminho: '/72_Seasons.jpg'},
 {name:"Mix Relax", caminho: '/relaxMusic.jpg'}]

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">

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

        <main className="flex-1 p-6">
          <div className='flex items-center gap-3'>
            <button className= 'rounded-full bg-black/60 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/60 p-1'>
              <ChevronRight />
            </button>
          </div>          
          <h1 className='font-semibold text-3xl mt-10' >Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
          {recommendedPlaylists.map((item, index) => (
            <a href='' key={index} className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <Image src={item.caminho} width={104} height={104} alt='Imagem Album'/>
              <strong className='text-sm text-zinc-400 hover:text-zinc-100'>{item.name}</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'> <Play /> </button>           
            </a>
            ))} 
          </div>
        </main>

      </div>

      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>

    </div>   
  )
}
