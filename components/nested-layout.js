import * as Icon from 'react-icons/ri'

export default function NestedLayout(){
    return (
        <div className='h-[400px] bg-white w-full'>
        <div className='flex flex-row items-center justify-center h-full'>
           <div className='flex flex-col w-1/2 '>
            LEFT
           </div>
           <div className='flex items-center w-1/2 '>
            <img className='object-fit w-full' src='images/retardos.jpg' alt='retardos' />
           </div>
        </div>
        </div>
    )
}