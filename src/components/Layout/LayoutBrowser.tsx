import { ReactNode, useState } from 'react';
import Image from 'next/image'
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { Avatar, Button, FormControlLabel, Grid, Switch } from '@mui/material';

import LayoutNavBar from './LayoutNavBar';
import useThemeContext from '../../data/hooks/useThemeContext'

const drawerWidth = 210;

interface LayoutBrowserProps {
  children?: ReactNode | undefined
}

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));


export default function LayoutBrowser({ children }: LayoutBrowserProps) {
  const [open, setOpen] = useState(false);
  const { mode, onChangeTheme } = useThemeContext()

  const modeHasLight = mode === 'light'

  const handleDrawer = () => setOpen(!open);

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawer}>
            {open ? <ArrowBackIos /> : <ArrowForwardIosIcon />}
          </IconButton>
        </DrawerHeader>
        <LayoutNavBar />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Header component="header">
          <Box sx={{ ml: 4 }} >
            <Image src={`${modeHasLight ? '/image/jws-112-175.png' : '/image/jws-white-112-175.png'}`} width={23} height={35} />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ mr: 2, color: 'red' }}>
              <MaterialUISwitch sx={{ m: 1 }} defaultChecked onClick={onChangeTheme} />
            </Box>
            <Box sx={{ mr: 2 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Box>
          </Box>
          <MyDivider />
        </Header>


        <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
          {children}
          {Array.from({ length: 100 }, (v, k) => (
            <div>Jakson</div>
          ))}
        </Box>
      </Box>
    </Box >
  );
}

export const Header = styled(Box)`
  display: flex;
  max-height: 60px;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background.paper};
  position: sticky;
  top: 0;
`
export const MyDivider = styled(Box)`
 width: 100%;
 height: 3px;
 position: absolute;
 left: 0px;
 right: 0px;
 top: 60px;
 background: ${({ theme }) => {
    if (theme.palette.mode === 'light') {
      return 'linear-gradient(90deg, rgb(253, 149, 31) 0%, rgba(253, 149, 31, 0.25) 100%);'
    }
    return 'linear-gradient(90deg, #8257e6, rgba(130,87,230,.25));'
  }};
`