import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {HiChevronDown,  HiArrowsExpand, HiCalendar, HiChartBar, HiCursorClick, HiPlay,HiShieldCheck, HiChartSquareBar, HiBellIcon, HiX, HiMenuAlt3, HiMenu } from 'react-icons/hi'
import Logo from '../components/logo'

const navigation = [
    { name: 'À propos', href: '/', current: false },
    { name: 'Carrières', href: '/', current: false },
    { name: 'Nous joindre', href: '/contact', current: false },
]

const mobileNavigation = [
  { name: 'Nos services', href:'/', current: false },
  { name: 'À propos', href: '/', current: false },
  { name: 'Carrières', href: '/', current: false },
  { name: 'Nous joindre', href: '/contact', current: false },
]
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function Navbar() {
         return (
          <>
            <Popover className="relative bg-thunder z-10">
           <div className="mx-auto max-w-screen-xl px-10 md:px-16">
                <div className="flex items-center justify-between  py-4 md:justify-start md:space-x-14">
                  <div className="flex justify-start lg:w-0 lg:flex-1">
                    <a href="/">
                      <span className="sr-only">KD signalisation</span>
                      <Logo className='outline-none ring-none' />
                    </a>
                  </div>
                  <div className="-my-2 -mr-2 md:hidden">
                    <Popover.Button className="inline-flex items-center justify-center p-2 text-white hover:text-thunder-200 transition-all focus:outline-none outline-none">
                      <span className="sr-only">Open menu</span>
                      <HiMenu className="h-8 w-8" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                  <Popover.Group as="nav" className="hidden w-full space-x-12  md:flex md:justify-end">
                    <Popover className="relative">
                      {({ open }) => (
                        <>
                          <Popover.Button
                            className='text-white hover:text-thunder-200 group inline-flex items-center text-sm'
                          >
                            <span className='font-three text-sm focus:outline-none outline-none ring-none border-none'>Nos services</span>
                            <HiChevronDown
                            className='text-[24px] mx-1'
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
                                <div className=" text-white  font-three text-sm bg-thunder hover:bg-thunder-400 transition-all tracking-wider rounded-t-md grid items-center justify-center gap-6 px-4 py-0 mt-4 sm:gap-8 sm:p-2">
                                <a href='/' className='space-y-6 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-8'>
                                Signalisation routière
                                </a>
                                </div>
                                <div className="relative text-white font-three text-sm tracking-wider bg-thunder hover:bg-thunder-400 transition-all items-center justify-center  grid gap-6 px-5 py-0  border-b-2 border-t-2 border-dark-50 sm:gap-8 sm:p-2">
                                <a href='/' className='space-y-6 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-8'>
                                Véhicule d'accompanement
                                </a>
                                </div>
                                <div className="relative text-white font-three text-sm bg-thunder hover:bg-thunder-400 transition-all tracking-wider rounded-b-md items-center justify-center  grid gap-6 px-5 py-0 sm:gap-8 sm:p-2">
                                <a href='/' className='space-y-6 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-8'>
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
                          <a className=' text-white hover:text-thunder-200 font-three text-sm transition-all flex items-center justify-center' href={item.href} key={item}> {item.name} </a>
                        )
                      })
                    }
                  
                  </Popover.Group>
                  <div className="hidden items-center justify-end md:hidden">
                    <a
                      href="#"
                      className=" inline-flex items-center justify-center whitespace-nowrap rounded border 
                      border-transparent text-sm bg-thunder hover:thunder-300 transition-all px-5 py-4
                      font-two tracking-wider
                      text-white shadow-sm"
                    >
                      Se connecter
                    </a>
                    <a href='#' className='text-white px-8 font-three text-sm'> S'inscrire </a>
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
                  <div className="divide-y-2 divide-thunder-200 bg-thunder shadow-lg">
                    <div className="px-10 pt-5 pb-6">
                      <div className="flex items-center justify-between">
                        <a href='/'>
                          <Logo className='outline-none ring-none' />
                        </a>
                        <div className="-mr-2">
                          <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-thunder-50  hover:text-dark-200 outline-none">
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
                                <a className='p-4 font-three text-sm text-white hover:text-dark-200 transition-all' href={item.href}
                                   key={item}
                                   >{item.name}</a>
                            )
                        })}
                      </div>
                      <div className='pt-6 border-t-2 border-dark-200'>
                        <a
                          href="#"
                          className="flex w-full items-center justify-center rounded-md border border-transparent bg-light-400 hover:bg-light transition-all px-4 py-2 text-sm font-two text-white shadow-sm"
                        >
                          S'inscrire
                        </a>
             
                          <a href="#" className="flex w-full items-center justify-center mt-4 rounded-md border border-transparent bg-light-400 hover:bg-light transition-all px-4 py-2 text-sm font-two text-white shadow-sm">
                            Se connecter
                          </a>
                    
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
            </>
         )
          
        }
