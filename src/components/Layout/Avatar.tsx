import Image from 'next/image'
import Link from 'next/link'
import { Tooltip } from "@material-ui/core"

import { Avatar, Grid_ as Grid } from './styles'

function MyAvatar() {
  return (
    <Avatar>
      <Link href="/perfil" passHref>
        <Tooltip title="Perfil" arrow placement="right">
          <Grid cursor="pointer">
            <Image src="/image/homem.png" width={44} height={44} />
          </Grid>
        </Tooltip>
      </Link>
    </Avatar>
  )
}

export default MyAvatar