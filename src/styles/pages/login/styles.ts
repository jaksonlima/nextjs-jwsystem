import styled from "styled-components"
import { Grid, Typography } from "@mui/material"


export const GridImageNext = styled(Grid)`
  margin-bottom: 25px;

   @media(max-width: 600px) {
    margin-bottom: 10px;

    img {
      width: 50px;
      height: 80px;
    }
  }
`

export const ImageNext = styled(Grid)`
  margin-bottom: 25px;

  @media(max-width: 600px) {
    margin-bottom: 15px;

    img {
      width: 80;
      height: 100px;
    }
  }
`

export const Container = styled.div`
  height: 100vh;
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;

  @media(max-width: 600px) {
    height: auto;
  }
`

export const GridImage = styled(Grid)`
  padding: 4% 4%;
  
  background-image: url('https://source.unsplash.com/random/?nature&ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: #111111;
`

export const GridItem = styled.div`
  max-width: 500px;
  width: 100%;
  margin-bottom: 10px;
  padding-bottom: 10px;
`

export const TypographyPrimary = styled(Typography)`
  color: #fcfcfd !important;
  font-weight: 700 !important;
  line-height: 1 !important;
  margin-bottom: 21px !important;

  @media(max-width: 1024px) {
    font-size: 2.333333rem !important;
  }
`

export const TypographySecundary = styled(Typography)`
  color: #fcfcfd !important;
  font-weight: 400 !important;
  line-height: 1.35 !important;
`

export const TypographyThird = styled(Typography)`
  color: #fcfcfd !important;
  font-weight: 400 !important;
  line-height: 1.6 !important;
  margin: 16px 0 !important;
`

export const TypographyTitle = styled(Typography)`
  font-size: 1.75rem  !important;
  font-weight: bold !important;
  margin-bottom: 8px !important;
  color: '#131316';
`

export const TypographyRecoverPass = styled(Typography)`
font-weight: 500 !important;
 color: '#131316' !important;
 text-align: end !important;
 margin-top: 15px !important;
 cursor: pointer;

 transition: color 0.2s ease-in-out;

 &:hover {
  color: #c2e59c;
 }
`

export const NovaConta = styled.div`
  margin-top: 25px;

  p {
    font-weight: 500;
  }
  
  a {
    margin-left: 5px !important;
    cursor: pointer;
    font-weight: 600;
    color: rgba(59, 130, 247, 1);
  }
`