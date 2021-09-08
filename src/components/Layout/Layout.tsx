import { useState } from 'react';
import Image from 'next/image'
import { useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import ToolbarHeader from './ToolbarHeader'
import NavBar from './NavBar';
import Avatar from './Avatar'
import { useStyles } from './styles';

interface LayoutProps {
  children: any
}

export default function Layout({ children }: LayoutProps) {
  const [open, setOpen] = useState(false);
  const [openOnMouse, setOpenOnMouse] = useState(false);
  const theme = useTheme();
  const classes = useStyles()

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
            <MenuIcon />
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
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <NavBar />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}

