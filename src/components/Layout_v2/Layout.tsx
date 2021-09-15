import React, { useState } from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import { IconButton } from '@material-ui/core';

import { Container, ContainerArrow, useStyles, Main } from './styles';
import NavBar from '../Layout/NavBar';
import Navigation from '../Layout/Navigation';
import Logo from '../Logo';
import styled, { css } from 'styled-components';

interface LayoutProps {
  children: any
}

export default function Layout({ children }: LayoutProps) {
  const [open, setOpen] = useState(false);
  const classes = useStyles(200);

  const handleDrawer = () => setOpen(!open);

  return (
    <Container>
      <Drawer
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
        <ContainerArrow>
          <IconButton onClick={handleDrawer}>
            {open ? <ArrowBackIos /> : <ArrowForwardIos />}
          </IconButton>
        </ContainerArrow>
        <AnimationLogo>
          <Logo />
        </AnimationLogo>
        <NavBar />
      </Drawer>

      <Main >
        <Navigation />
        {children}
      </Main>
    </Container>
  );
}


export const AnimationLogo = styled.div`
  width: 27px;
  height: 45px;
  margin: auto;
  position: absolute;
  left: 79px;
  top: 4px;

  /* ${props => props.open && css`
    background: white;
    color: black;
  `} */
`