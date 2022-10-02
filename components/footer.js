import Logo from '../components/logo'
import * as Icon from 'react-icons/ri'

export default function Footer() {
    return (
     
      
      <footer class="bg-dark">
        <div class="max-w-screen-xl pb-6 pt-0 px-6 mx-auto">
          <div class="lg:flex lg:gap-8">
      
            <div class="grid grid-cols-2 gap-8 mt-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
              <div class="col-span-2 text-center md:text-left">

              </div>
      
              <div class="col-span-2 lg:col-span-3 lg:flex lg:items-end">

              </div>
      
              <div class="col-span-2 pt-6 border-t sm:col-span-1 border-dark-25/10">
                <p class="font-main text-dark-300">Nos services</p>
      
                <nav class="flex flex-col font-main mt-6 space-y-4 text-sm text-dark-50">
                  <a class="inline-block" href="/signalisation"> Signalisation Routière </a>
                  <a class="inline-block" href=""> Véhicule d'accompagnement </a>
                  <a class="inline-block" href="/location"> Location d'équipements (bientot) </a>
                </nav>
              </div>
      
              <div class="col-span-2 pt-6 border-t sm:col-span-1 border-dark-25/10">
                <p class="font-main text-dark-300">L'entreprise</p>
      
                <nav class="flex flex-col mt-6 space-y-4 text-sm text-dark-50 font-main">
                  <a class="inline-block" href="/about"> Qui sommes-nous ? </a>
                  <a class="inline-block" href="/about"> L'équipe </a>
                  <a class="inline-block" href="/job"> Carrière </a>
                </nav>
              </div>
      
              <div class="col-span-2 pt-6 border-t sm:col-span-1 border-dark-25/10">
                <p class="font-main text-dark-300">Liens utiles</p>
      
                <nav class="flex flex-col mt-6 space-y-4 text-sm text-dark-50 font-main">
                  <a class="inline-block" href="/contact"> Nous joindre </a>
                  <a class="inline-block" href="#"> FAQs </a>
                </nav>
              </div>
      
              <div class="col-span-2 pt-6 border-t sm:col-span-1 border-dark-25/10">
                <p class="font-main text-dark-300">Client</p>
      
                <nav class="flex flex-col mt-6 space-y-4 text-sm font-main text-dark-50">
                  <a class="inline-block" href="">Connexion</a>
                  <a class="inline-block" href="">Inscription</a>
                </nav>
              </div>
      
              <div class="flex col-span-2 gap-5 text-dark-100 lg:col-span-5">
                <a class="hover:opacity-75" href="https://www.facebook.com/profile.php?id=100086453343364" target="_blank" rel="noreferrer">
                  <span class="sr-only"> Facebook </span>
                  <Icon.RiFacebookCircleFill className='text-2xl' />
                </a>
      
                <a class="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
                  <span class="sr-only"> Linkedin </span>
      
                 <Icon.RiLinkedinFill  className='text-2xl' />
                </a>
      
                <a class="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
                  <span class="sr-only"> Twitter </span>
                  <Icon.RiTwitterFill className='text-2xl' />
                </a>
      
              </div>
            </div>
          </div>
      
          <div class="pt-8 mt-12 border-t border-dark-25/10">
            <div class="flex flex-col items-center justify-around">
              <Logo className='mx-auto' fill='#887F94' size='28px' />
              <p class="text-center text-dark-200 text-xs font-normal mt-4">
                 &copy; 2022. KD Signalisation. Tout droits reserver
              </p>
            </div>
          </div>
        </div>
      </footer>

    )
}