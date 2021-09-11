import { memo, useEffect, useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Typography, Breadcrumbs } from '@material-ui/core';
import { Home, ArrowForwardIos } from '@material-ui/icons';

import { iconsFooter, iconsHeader, IconsProps } from './icons'
import { TypographyCursorPointer, useStylesNavegation } from './styles';


function Navegation() {
  const [navegation, setNavegation] = useState<IconsProps>()
  const classes = useStylesNavegation();
  const router = useRouter()

  useEffect(() => {
    const iconRouter = [...iconsHeader, ...iconsFooter]
      .find(icon => icon.go === router.pathname);

    setNavegation(iconRouter)
  }, [router])

  const trivialPath: boolean = navegation?.go !== '/'

  function handleLink() {
    return trivialPath ?
      <Link href="/" passHref>
        <TypographyCursorPointer color={trivialPath ? 'inherit' : 'textPrimary'} className={classes.link}>
          <Home className={classes.icon} />
          Início
        </TypographyCursorPointer>
      </Link> :
      <Typography color={trivialPath ? 'inherit' : 'textPrimary'} className={classes.link}>
        <Home className={classes.icon} />
        Início
      </Typography>
  }

  function handleTrivialPath() {
    return trivialPath && (
      < Typography color="textPrimary" className={classes.link}>
        {navegation?.iconNavegation({ className: classes.icon }) ?? <ArrowForwardIos className={classes.icon} />}
        {navegation?.name ?? ''}
      </Typography>
    )
  }

  return (
    <Breadcrumbs aria-label="breadcrumb" >
      {handleLink()}
      {handleTrivialPath()}
    </Breadcrumbs>
  )
}

export default memo(Navegation)