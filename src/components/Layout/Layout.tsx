import { useState } from 'react';
import clsx from 'clsx';
import { useTheme, Drawer, AppBar, Toolbar, Divider, IconButton } from '@material-ui/core';
import { Menu, ChevronLeft, ChevronRight } from '@material-ui/icons'

import { useStylesLayout } from './styles';
import ToolbarHeader from './Header';
import NavBar from './NavBar';
import Avatar from './Avatar';
import Navigation from './Navigation'

interface LayoutProps {
  children: any
}

export default function Layout({ children }: LayoutProps) {
  const [open, setOpen] = useState(false);
  const [openOnMouse, setOpenOnMouse] = useState(false);
  const theme = useTheme();
  const classes = useStylesLayout()

  const handleDrawer = () => setOpen(!open)
  const handleDrawerOnMouse = () => setOpenOnMouse(!openOnMouse)

  const handleDrawerOnMouseEnter = () => {
    if (!open) {
      handleDrawer()
      handleDrawerOnMouse()
    }
  }

  const handleDrawerOnMouseLeave = () => {
    if (open && openOnMouse) {
      handleDrawer()
      handleDrawerOnMouse()
    }
  }

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawer}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <Menu />
          </IconButton>
          <ToolbarHeader />
        </Toolbar>
      </AppBar>
      <Drawer
        onMouseEnter={handleDrawerOnMouseEnter}
        onMouseLeave={handleDrawerOnMouseLeave}
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar} >
          <Avatar />
          <IconButton onClick={handleDrawer}>
            {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </div>
        <Divider />
        <NavBar />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Navigation />
        {children}
      </main>
    </div>
  );
}

