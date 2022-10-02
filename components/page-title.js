export default function PageTitle({children}){
    return (
        <div className='w-full h-auto flex items-center justify-center pt-10 pb-6 md:pt-20 md:pb-8'>
        <div className='w-2/8 text-center'>
        <h1 className='text-6xl text-light font-ultra tracking-wide leading-none'>
            {children}
        </h1>
        </div>
        </div>
    )
}