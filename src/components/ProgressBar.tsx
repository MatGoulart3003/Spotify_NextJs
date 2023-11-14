export function ProgressBar (){

    return (
        <div className='flex items-center gap-2 mt-2'>
         <span className='text-xs text-zinc-500'>2:11</span>
         <div className='h-1 rounded-full w-96 bg-zinc-600'>
           <div className='h-1 bg-zinc-100 w-40'></div>
         </div>
         <span className='text-xs text-zinc-500'>6:47</span>
        </div>
    )

}