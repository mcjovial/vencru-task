import React, { useContext } from 'react'
import { NavContext } from '../../app/App'
import Logo from '../sidenav/logo/Logo'

const MobileNav = () => {
  const {mobileOpen, setMobileOpen} = useContext(NavContext)
  
  const handleNav = () => {
    console.log('hey',mobileOpen);
    setMobileOpen(!mobileOpen)
  }

  return (
    <>
      <div className='lg:hidden relative z-20 shadow-md'>
        <div className='mx-4 flex justify-between py-4 items-center'>
          <Logo />
          <div className='p-0 min-h-48 md:min-h-64'>
            {/* <div className="flex flex-1 px-16"> */}
              <img className="w-8 h-8 p-0 mx-0 sm:mx-8 cursor-pointer" src="assets/images/menu.svg" alt="" onClick={handleNav} />
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileNav