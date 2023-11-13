import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play ,Shuffle, Repeat2,SkipForward, SkipBack, Pause } from 'lucide-react'
import Image from 'next/image'

const playlists = ["Daily Music", "This is Metallica", "This is Edu Falaschi", "Eldorado"]

const recommendedPlaylists = [{ name: "Eldorado", caminho: '/imagesRecomended/Eldorado.webp'},
 {name:"Musicas para Codar", caminho: '/imagesRecomended/imageCode.jpg'}, 
 {name:"Musicas Curtidas", caminho: '/imagesRecomended/musicasCurtidas.jpeg'},
 {name:"Mega Funk 2023", caminho: '/imagesRecomended/megaFunk.png'},
 {name:"72 Seasons", caminho: '/imagesRecomended/72_Seasons.jpg'},
 {name:"Mix Relax", caminho: '/imagesRecomended/relaxMusic.jpg'}]

const musicasSaudade =[{title: " Top 50 - Mundo", img: '/imagesmusicasSaudade/top_50.jpg', description: "Mundo: seu relatório diario de faixas mais tocadas no mundo"},
 {title: 'Rebirth', img: '/imagesmusicasSaudade/Rebirth.jpeg', description: 'ANGRA'},
 {title: 'Sommer Pop Gits', img: '/imagesmusicasSaudade/Sommer.jpeg', description: 'Vários interpretes'},
 {title: 'This is Chester Bennington', img: '/imagesmusicasSaudade/Chester.jpeg', description: 'The best of Chester Bennington'}, 
 {title: 'Ride the Lingthing', img: '/imagesmusicasSaudade/Ride.jpeg', description: 'Metallica'}, 
 {title: 'Drake', img: '/imagesmusicasSaudade/Drake.jpg', description: 'Artist'}]


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

      <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between">
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
            <span className='text-xs text-zinc-500'>0:31</span>
            <div className='h-1 rounded-full w-96 bg-zinc-600'>
              <div className='h-1 bg-zinc-100 w-40'></div>
            </div>
            <span className='text-xs text-zinc-500'>2:31</span>
          </div>
        </div>

        <div>
          algo
        </div>
      </footer>

    </div>   
  )
}
