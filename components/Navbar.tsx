import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// ui components
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from './ui/sheet'

// react-icons
import { RiMenu3Line } from 'react-icons/ri';

const Navbar: React.FC<any> = () => {
    return (
        <nav className='w-full backdrop-blur-md bg-white bg-opacity-30 z-50 fixed h-20 flex justify-between items-center py-4 px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-24'>
            <Link href={'/'} className='flex justify-between items-center gap-2 cursor-pointer'>
                <Image src={'/nav-logo.svg'} alt={'ConvertNow Logo'} width={40} height={40} />
                <span className='text-2xl font-bold'>ConvertNow</span>
            </Link>
            <div className="gap-1 md:gap-2 lg:gap-4 hidden md:flex">
                <Button variant="ghost" className="font-semibold text-md">
                    <Link href="/">Home</Link>
                </Button>
                <Link href="/about">
                    <Button variant="ghost" className="font-semibold text-md">
                        About
                    </Button>
                </Link>
                <Link href="/privacy-policy">
                    <Button variant="ghost" className="font-semibold text-md">
                        Privacy Policy
                    </Button>
                </Link>
            </div>
            <Link href={'#'}>
                <Button variant={'default'} className="font-semibold rounded-full w-fit gap-2 items-center hidden md:flex" size="lg">
                    <span>Feedback</span>
                </Button>
            </Link>

            {/* Hamburger Menu */}
            <Sheet>
                <SheetTrigger className="block md:hidden p-3">
                    <span className="text-2xl">
                        <RiMenu3Line />
                    </span>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetDescription>
                            <div className="w-full space-y-3">
                                <Link href="/">
                                    <Button
                                        variant="link"
                                        className="font-semibold text-md w-full"
                                    >
                                        Home
                                    </Button>
                                </Link>
                                <Link href="/about">
                                    <Button
                                        variant="link"
                                        className="font-semibold text-md w-full"
                                    >
                                        About
                                    </Button>
                                </Link>
                                <Link href="/privacy-policy">
                                    <Button
                                        variant="link"
                                        className="font-semibold text-md w-full"
                                    >
                                        Privacy Policy
                                    </Button>
                                </Link>
                            </div>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </nav>
    )
}

export default Navbar