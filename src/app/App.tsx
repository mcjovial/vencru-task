import React, { createContext, useState } from 'react';
import MobileNav from '../components/mobileNav/MobileNav';
import SideNav from '../components/sidenav/SideNav';
import '../index.css';
import Main from './main/Index';

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const NavContext = createContext<any>({mobileOpen: true, setMobileOpen: (mobileOpen: true)=>{}})
export const App: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <div className="w-full flex">
        <NavContext.Provider value={{ mobileOpen, setMobileOpen }}>
          <div className="flex flex-auto min-w-0">
            <SideNav />
            <main className="flex flex-col flex-auto min-h-full min-w-0 relative z-10 m">
              <MobileNav/>
              <Main />
            </main>
          </div>
        </NavContext.Provider>
      </div>
    </>
  );
};
