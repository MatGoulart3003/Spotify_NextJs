
import { NavigationPair } from "./NavigationPair";
import { RecommendedAbums } from "./RecommendedAlbums";
import { SongsMissing } from "./SongsMissing";

export function Main (){
    return (
        <main className="flex-1 p-6">
          <NavigationPair />         
          <h1 className='font-semibold text-3xl mt-10' >Boa tarde</h1>
          <RecommendedAbums />
          <h2 className='font-semibold text-2xl mt-10'>Suas músicas estão com saudade</h2>
          <SongsMissing />        
        </main>
    )
}