import { Hidden, styled, SwipeableDrawer } from '@mui/material';
import React, { useContext, useState } from 'react';
import { NavContext } from '../../app/App';
import SideNavContent from './SideNavContent';

const SideNav = () => {
  const [navOpen, setNavOpen] = useState(true);
  const {mobileOpen, setMobileOpen} = useContext(NavContext)
  const navbarWidth = 280;

  const StyledNavBar = styled('div')(({ theme }) => ({
    minWidth: navbarWidth,
    width: navbarWidth,
    maxWidth: navbarWidth,
    ...(!navOpen && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.leavingScreen,
      }),
      ...{
        marginLeft: `-${navbarWidth}px`,
      },
      // ...(position === 'right' && {
      //   marginRight: `-${navbarWidth}px`,
      // }),
    }),
    ...(navOpen && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
  const StyledNavBarMobile = styled(SwipeableDrawer)(({ theme }) => ({
    '& .MuiDrawer-paper': {
      minWidth: navbarWidth,
      width: navbarWidth,
      maxWidth: navbarWidth,
    },
  }));

  return (
    <>
      <Hidden lgDown>
        <StyledNavBar className="left-0 flex-col flex-auto sticky top-0 overflow-hidden h-screen shrink-0 z-20 shadow-5 border-r border-gray-200">
          <SideNavContent />
          <h2>Desktop View</h2>
        </StyledNavBar>
      </Hidden>
      <Hidden lgUp>
        <StyledNavBarMobile
          classes={{
            paper: 'flex-col flex-auto h-full',
          }}
          onClose={() => setMobileOpen(!mobileOpen)}
          onOpen={() => {
            return;
          }}
          open={mobileOpen}
          anchor="left"
          variant="temporary"
          disableSwipeToOpen
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <SideNavContent />
        </StyledNavBarMobile>
      </Hidden>
    </>
  );
};

export default SideNav;
