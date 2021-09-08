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
import Tooltip from '@material-ui/core/Tooltip';

import NavBar from './NavBar';
import { Avatar, useStyles } from './styles';
import { Grid, Typography } from '@material-ui/core';

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
          <Avatar>
            <Tooltip title="Perfil" arrow placement="right">
              <Grid>
                <Image src="/image/homem.png" width={44} height={44} />
              </Grid>
            </Tooltip>
          </Avatar>
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

        {Array.from({ length: 15 }, (v, k) => (
          <Typography paragraph key={k}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
            facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
            gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
            donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
            adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
            Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
            imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
            arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
          </Typography>
        ))}
      </main>
    </div>
  );
}

