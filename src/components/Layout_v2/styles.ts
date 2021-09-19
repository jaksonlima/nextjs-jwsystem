import { makeStyles, Theme, createStyles, Paper, LinearProgress, Box } from "@material-ui/core";
import styled from "styled-components";

export const useStyles = (drawerWidth) => {
  const styledDrawer = makeStyles((theme: Theme) =>
    createStyles({
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
      },
      drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      drawerClose: {
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
      }
    })
  )

  return styledDrawer()
}

export const ContainerArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 8px;
`

export const Container = styled.div`
  display: flex;
`

export const Main = styled.div`
  flex: 1;
  padding: 13px;
`

export const PaperMUI = styled(Paper)`
  height:  calc(100vh - 59px);
  position: relative;
`

export const ProcessIcon = styled(LinearProgress)`
  border-radius: 5px;
  height: 9px !important;
  opacity: 0.8;
`

export const Process = styled(Box)`
  flex: 1;
  padding: 12px 12px 12px 14px;
`

export const Table = styled(Box)`
  display: flex;
  align-items: center;
  position: absolute;
  width: calc(99% - 13px);
  top: 0;
  z-index: 1;
`

export const Icon = styled(Box)`
  width: 12px;
  height: 12px;
  border-radius: 100%;
  margin: 10px;
  background-color: ${({ color }) => color};
  cursor: pointer;

  @media(max-width: 360px) {
    margin: 7px;
  }
`