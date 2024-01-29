import { FaBars } from 'react-icons/fa'

import React from 'react'

const Header = ({ setIsOpen }) => {
    return (
        <header className="fixed items-center justify-between bg-gray-900 px-6 w-full text-white sm:hidden">
            <div className="inset-y-0 flex w-full items-center">
                <button
                    className="mx-10 h-[40px] border-none bg-transparent text-white outline-none "
                    onClick={setIsOpen}
                >
                    <FaBars size={24} />
                </button>
            </div>
        </header>
    )
}

export default Header
