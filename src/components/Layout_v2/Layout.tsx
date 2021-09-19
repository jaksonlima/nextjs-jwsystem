import React, { useState } from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import { Box, IconButton, Typography } from '@material-ui/core';

import { Container, ContainerArrow, useStyles, Main, PaperMUI, Table, Icon, Process, ProcessIcon } from './styles';
import NavBar from '../Layout/NavBar';
import styled, { css } from 'styled-components';
import useThemeContext from '../../data/hooks/useThemeContext';
import { Theme } from '../../data/context/ThemeContext';
import useWindowSize from '../../data/hooks/useWindowSize'

interface LayoutProps {
  children: any
}

export default function Layout({ children }: LayoutProps) {
  const [open, setOpen] = useState(false);
  const classes = useStyles(200);

  const { width } = useWindowSize();
  const { onChangeTheme } = useThemeContext()

  const handleDrawer = () => setOpen(!open);

  console.log(width)

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  return (
    <Container>
      <Drawer
        // {width === 425 ? {} : {}}
        // open={true}
        // anchor="left"
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
        <NavBar />
      </Drawer>

      <Main onClick={onChangeTheme} >
        <AfterNavegation>
          <ItemAfterNavegation>
            <Box sx={{ display: 'flex' }} m={1} alignItems="center">
              <TypographyMUI variant="body1" >
                Home
              </TypographyMUI>
            </Box>
          </ItemAfterNavegation>
        </AfterNavegation>
        <PaperMUI elevation={3}>
          <SecondSheet>
            <Table bgcolor='background.paper'>
              <Icon boxShadow={3} color="#20cd4e" />
              <Icon boxShadow={3} color="#f7625a" />
              <Process >
                <ProcessIcon
                  color="secondary"
                  variant="determinate"
                  value={0}
                />
              </Process>
            </Table>
            <Box height="33px" />

            {children}

            {Array.from({ length: 19 }, (v, k) => (
              <h1>Jakson Wilson Bonfim de Lima</h1>
            ))}

          </SecondSheet>
        </PaperMUI>
      </Main>
    </Container >
  );
}

export const TypographyMUI = styled(Typography)`
  font-weight: 500 !important;
`

export const SecondSheet = styled.div`
  height: 100%;
  padding: 8px 0 0 8px;
  overflow: scroll;
`

export const AfterNavegation = styled(Box)`
  display: flex;
`

export const ItemAfterNavegation = styled(Box)`
  display: flex;
  max-width: 120px;
  width: 100%;
  max-height: 30px;
  height: 100%;
  margin-right: 2px;
  border-radius: 5px 5px 0px 0px;

  ${({ theme }) => theme.palette.type === Theme.DARK ?
    css`
    background-color: #13233a;
    border: 1px solid #1d3e6b;
   ` :
    css`
     background-color: #ddf4ff;
    border: 1px solid #bbdfff;
   `
  }
`