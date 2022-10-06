import * as Icon from 'react-icons/ri'
import Button from '../components/button'
import Image from 'next/image'


export default function NestedLayout(){
    return (
      <section id='hero'>
        <div className='flex flex-col-reverse max-w-screen-xl md:flex-row items-center justify-center px-14 mx-auto my-20 space-y-0 md:space-y-0'>
          <div className="flex flex-col md:w-1/2">
            <h1 className="md:max-w-3/4 leading-tight text-tusk-700 text-4xl font-one text-center md:text-6xl md:text-left">
             LES EXPERTS DE LA SIGNALISATION ROUTIÈRE.
            </h1>
            <p className="max-w-md font-two text-1xl text-center pt-0 mt-0 text-darkgray md:text-left">
               
            </p>
            <a href="/" className="py-5 px-6 flex mt-14 w-1/2  mx-auto md:mx-0 items-center justify-center text-thunder-100 bg-tusk-700 font-two text-1xl rounded-md baseline hover:bg-tusk">
              Nos services
            </a>
          </div>
          <div className='md:w-1/2'>
            <img src="/images/arrow1.gif" alt="signalisation" />
          </div>
        </div>
      </section>
    )
}