import Logo from '../components/logo'
import * as Icon from 'react-icons/ri'
import { HiOfficeBuilding } from 'react-icons/hi'
import { TbBarrierBlock, TbBuilding, TbExternalLink, TbHeart, TbUser } from 'react-icons/tb'

export default function Footer() {
    return (
     
      
      <footer className="bg-thunder-600 -mt-8 md:mt-0">
        <div className="max-w-screen-xl h-auto pb-6 px-14 mx-auto">
          <div className="lg:flex lg:gap-8">
      
            <div className="grid grid-cols-2 gap-8 mt-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
              <div className="col-span-2 text-center md:text-left">

              </div>
      
              <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">

              </div>
      
              <div className="col-span-2 pt-6 border-t sm:col-span-1 border-dark-25/10">
              <p className="font-three text-2xl text-thunder-50 inline-flex items-center"><TbBarrierBlock className='mr-2' />  Services </p>
      
                <nav className="flex flex-col font-three mt-6 space-y-4 text-sm text-thunder-25">
                  <a className="inline-block" href="/signalisation"> Signalisation Routière </a>
                  <a className="inline-block" href="/"> Véhicule d'accompagnement </a>
                  <a className="inline-block" href="/location"> Location d'équipements </a>
                </nav>
              </div>
      
              <div className="col-span-2 pt-6 border-t sm:col-span-1 border-dark-25/10">
                <p className="font-three text-qxl text-thunder-50 inline-flex items-center"><TbBuilding className='mr-2' /> L'entreprise</p>
      
                <nav className="flex flex-col mt-6 space-y-4 text-sm text-thunder-25 font-three">
                  <a className="inline-block" href="/about"> Qui sommes-nous ? </a>
                  <a className="inline-block" href="/about"> L'équipe </a>
                  <a className="inline-block" href="/job"> Carrières </a>
                </nav>
              </div>
      
              <div className="col-span-2 pt-6 border-t sm:col-span-1 border-dark-25/10">
                <p className="font-three text-1xl text-thunder-50 inline-flex items-center"><TbHeart className='mr-2' /> Liens utiles</p>
      
                <nav className="flex flex-col mt-6 space-y-4 text-sm text-thunder-25 font-three">
                  <a className="inline-block" href="/contact"> Nous joindre </a>
                  <a className="inline-block" href="#"> FAQs </a>
                </nav>
              </div>
      
              <div className="col-span-2 pt-6 border-t sm:col-span-1 border-dark-25/10">
                <p className="font-three text-1xl text-thunder-50 inline-flex items-center"><TbUser className='mr-2' /> Client</p>
      
                <nav className="flex flex-col mt-6 space-y-4 text-sm font-three text-thunder-25">
                  <a className="inline-block" href="">Connexion</a>
                  <a className="inline-block" href="">Inscription</a>
                </nav>
              </div>
      
              <div className="flex col-span-2 gap-5 text-dark-100 lg:col-span-5">
                <a className="hover:opacity-75" href="https://www.facebook.com/profile.php?id=100086453343364" target="_blank" rel="noreferrer">
                  <span className="sr-only"> Facebook </span>
                  <Icon.RiFacebookCircleFill className='text-2xl' />
                </a>
      
                <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
                  <span className="sr-only"> Linkedin </span>
      
                 <Icon.RiLinkedinFill  className='text-2xl' />
                </a>
      
                <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
                  <span className="sr-only"> Twitter </span>
                  <Icon.RiTwitterFill className='text-2xl' />
                </a>
      
              </div>
            </div>
          </div>
      
          <div className="pt-8 mt-12 border-t border-dark-25/10">
            <div className="flex flex-col items-center justify-around">
              <Logo className='mx-auto' fill='#887F94' size='28px' />
              <p className="text-center text-thunder-25 text-xs font-normal mt-4">
                 &copy; 2022. KD Signalisation. Tout droits reserver
              </p>
            </div>
          </div>
        </div>
      </footer>

    )
}