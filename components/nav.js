
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {HiChevronDown,  HiArrowsExpand, HiCalendar, HiChartBar, HiCursorClick, HiPlay,HiShieldCheck, HiChartSquareBar, HiBellIcon, HiX, HiMenuAlt3, HiMenu } from 'react-icons/hi'
import Logo from '../components/logo'

const navigation = [
    { name: 'À propos', href: '/about', current: false },
    { name: 'Carrières', href: '/job', current: false },
    { name: 'Nous joindre', href: '/contact', current: false },
]

const mobileNavigation = [
  { name: 'Nos services', href:'/services', current: false },
  { name: 'À propos', href: '/about', current: false },
  { name: 'Carrières', href: '/job', current: false },
  { name: 'Nous joindre', href: '/contact', current: false },
]
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function Navbar() {

         return (
            <Popover className="relative bg-dark">
              <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
                <div className="flex items-center justify-between  py-4 md:justify-start md:space-x-14">
                  <div className="flex justify-start lg:w-0 lg:flex-1">
                    <a href="/">
                      <span className="sr-only">KD Signalisation</span>
                      <Logo className='outline-none'/>
                    </a>
                  </div>
                  <div className="-my-2 -mr-2 md:hidden">
                    <Popover.Button className="inline-flex items-center justify-center p-2 text-white hover:text-dark-200 transition-all focus:outline-none outline-none">
                      <span className="sr-only">Open menu</span>
                      <HiMenu className="h-8 w-8" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                  <Popover.Group as="nav" className="hidden space-x-8  md:flex">
                    <Popover className="relative">
                      {({ open }) => (
                        <>
                          <Popover.Button
                            className='text-dark-50 hover:text-dark-200 group inline-flex items-center text-base'
                           
                          >
                            <span className='text-dark-50 font-semibold'>Nos Services</span>
                            <HiChevronDown
                              className={classNames(
                                open ? 'text-dark-50' : 'text-dark-100',
                                'mt-1 ml-1 h-6 w-6'
                              )}
                              aria-hidden="true"
                            />
                          </Popover.Button>
        
                          <Transition
                            as={Fragment}
                            enter="transition cubic-bezier(.52,.15,.83,.67) duration-200"
                            enterFrom="opacity-0 -translate-y-20"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition cubic-bezier(.52,.15,.83,.67) duration-200"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-20"
                          >
                            <Popover.Panel className="absolute z-10 -ml-4 mt-4 w-screen max-w-[330px] transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-[50%]">
                              <div className="overflow-hidden shadow-lg">
                                <div className=" text-dark-50  font-semibold bg-dark hover:bg-dark-400 transition-all tracking-wider rounded-t-md grid items-center justify-center gap-6 px-4 py-0 mt-4 sm:gap-8 sm:p-2">
                                <a href='/signalisation' className='space-y-6 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-8'>
                                Signalisation routière
                                </a>
                                </div>
                                <div className="relative text-dark-50 font-semibold tracking-wider bg-dark hover:bg-dark-400 transition-all items-center justify-center  grid gap-6 px-5 py-0  border-b-2 border-t-2 border-dark-50 sm:gap-8 sm:p-2">
                                <a href='#' className='space-y-6 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-8'>
                                Véhicule d'accompanement
                                </a>
                                </div>
                                <div className="relative text-dark-50 font-semibold bg-dark hover:bg-dark-400 transition-all tracking-wider rounded-b-md items-center justify-center  grid gap-6 px-5 py-0 sm:gap-8 sm:p-2">
                                <a href='/location' className='space-y-6 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-8'>
                                Location d'équipements
                                </a>
                                </div>
                               
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                    {
                      navigation.map((item) => {
                        return (
                          <a className=' text-dark-50 hover:text-dark-200 font-semibold transition-all' href={item.href} key={item}> {item.name} </a>
                        )
                      })
                    }
                  
                  </Popover.Group>
                  <div className="hidden items-center justify-center md:flex md:flex-1 lg:w-0">
                    <a
                      href="#"
                      className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded border border-transparent bg-light-400 hover:bg-light transition-all px-5 py-3 text-base
                      font-semibold tracking-wider
                      text-white shadow-sm"
                    >
                      Se connecter
                    </a>
                    <a href='#' className='text-white px-8 font-medium'> S'inscrire </a>
                  </div>
                </div>
              </div>
        
              <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform transition md:hidden">
                  <div className="divide-y-2 divide-dark-200 bg-dark shadow-lg">
                    <div className="px-5 pt-5 pb-6">
                      <div className="flex items-center justify-between">
                        <a href='/'>
                          <Logo className='outline-none ring-none' />
                        </a>
                        <div className="-mr-2">
                          <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-dark-50  hover:text-dark-200 outline-none">
                            <span className="sr-only">Close menu</span>
                            <HiX className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
 
                    </div>
                    <div className="space-y-4 py-6 px-5">
                      <div className="grid grid-cols-2 gap-y-4 gap-x-15 text-white ">
                        { mobileNavigation.map((item)=> {
                            return (
                                <a className='p-4 font-semibold text-dark-50 hover:text-dark-200 transition-all' href={item.href}
                                   key={item}
                                   >{item.name}</a>
                            )
                        })}
                      </div>
                      <div className='pt-6 border-t-2 border-dark-200'>
                        <a
                          href="#"
                          className="flex w-full items-center justify-center rounded-md border border-transparent bg-light-400 hover:bg-light transition-all px-4 py-2 text-base font-medium text-white shadow-sm"
                        >
                          S'inscrire
                        </a>
             
                          <a href="#" className="flex w-full items-center justify-center mt-4 rounded-md border border-transparent bg-light-400 hover:bg-light transition-all px-4 py-2 text-base font-medium text-white shadow-sm">
                            Se connecter
                          </a>
                    
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
         )
          
        }
