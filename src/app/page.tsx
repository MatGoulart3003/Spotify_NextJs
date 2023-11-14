import { Footer } from '@/components/Footer'
import { Main } from '@/components/Main'
import { Sidebar } from '@/components/Sidebar'
import { musicasSaudade, recommendedPlaylists } from '@/data/data'
import {ChevronLeft, ChevronRight, Play} from 'lucide-react'
import Image from 'next/image'


export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">     
        <Sidebar />
        <Main />
      </div>
      <Footer/>
    </div>   
  )
}
