import React from 'react'
import NavbarTop from './navbar-top'
import NavbarBottom from './navbar-bottom'

const Navbar: React.FC = () => {
    return (
        <div className='fixed w-full z-20 top-0 left-0'>
            <NavbarTop />
            <NavbarBottom />
        </div>
    )
}

export default Navbar