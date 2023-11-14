import { CurrentMusic } from "./CurrentMusic";
import { Player } from "./Player";
import { ProgressBar } from "./ProgressBar";
import { RightSession } from "./RightSession";

export function Footer(){
    return(
        <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-5 flex items-center justify-between">
        <CurrentMusic />
        <div className='flex flex-col items-center'>
          <Player />
          <ProgressBar />
        </div>
        <RightSession />        
      </footer>
    )
}