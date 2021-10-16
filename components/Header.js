import React, { useState } from 'react'

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const togglemenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className='w-full flex items-center'>
            <img src="/Playstation_Img/logo.png" alt="Playstation Logo" className='w-12 cursor-pointer my-7' />
            <nav className='text-right flex-1'>
                <ul className={`w-full transition-all duration-500 overflow-hidden md:bg-white md:relative md:z-0 md:top-0 md:from-white md:to-white bg-gradient-to-r from-[#ff54a2] to-[#ff575a] absolute top-[75px] right-0 z-10 md:h-auto ${isOpen ? `h-40` : `h-0`}`}>
                    <li className='block my-3 mr-5 md:inline-block md:mr-7'><a href="#" className='text-sm text-white md:text-black md:hover:text-[#ff5ea2]'>Game Controllers</a></li>
                    <li className='block my-3 mr-5 md:inline-block md:mr-7'><a href="#" className='text-sm text-white md:text-black md:hover:text-[#ff5ea2]'>VR Accessories</a></li>
                    <li className='block my-3 mr-5 md:inline-block md:mr-7'><a href="#" className='text-sm text-white md:text-black md:hover:text-[#ff5ea2]'>Media Remotes</a></li>
                    <li className='block my-3 mr-5 md:inline-block md:mr-7'><a href="#" className='text-sm text-white md:text-black md:hover:text-[#ff5ea2]'>Others</a></li>
                </ul>
            </nav>
            <img onClick={togglemenu} src="/Playstation_Img/menu.png" alt="Menu" className='w-6 cursor-pointer md:hidden' />
        </header>
    )
}

export default Header
