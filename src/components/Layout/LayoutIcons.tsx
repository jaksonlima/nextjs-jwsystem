import ExitToAppOutlined from '@mui/icons-material/ExitToAppOutlined'
import DateRangeOutlined from '@mui/icons-material/DateRangeOutlined'
import LayersOutlined from '@mui/icons-material/LayersOutlined'
import HowToVoteOutlined from '@mui/icons-material/HowToVoteOutlined'
import StorefrontOutlined from '@mui/icons-material/StorefrontOutlined'
import EventAvailableOutlined from '@mui/icons-material/EventAvailableOutlined'
import HomeOutlined from '@mui/icons-material/HomeOutlined'
import HowToRegOutlined from '@mui/icons-material/HowToRegOutlined'
import GroupAddOutlined from '@mui/icons-material/GroupAddOutlined'
import Home from '@mui/icons-material/Home'
import DateRange from '@mui/icons-material/DateRange'
import EventAvailable from '@mui/icons-material/EventAvailable'
import GroupAdd from '@mui/icons-material/GroupAdd'
import HowToReg from '@mui/icons-material/HowToReg'
import Layers from '@mui/icons-material/Layers'
import HowToVote from '@mui/icons-material/HowToVote'
import ExitToApp from '@mui/icons-material/ExitToApp'
import Storefront from '@mui/icons-material/Storefront'

export interface IconsProps {
  name: string
  go: string
  order: number
  icon: any
}

export const iconsHeader: IconsProps[] = [
  {
    name: 'Início',
    go: '/',
    order: 1,
    icon: <HomeOutlined color="secondary" />
  },
  {
    name: 'Agendas',
    go: '/agenda',
    order: 2,
    icon: <DateRangeOutlined color="secondary" />
  },
  {
    name: 'Vendas',
    go: '/venda',
    order: 3,
    icon: <EventAvailableOutlined color="secondary" />
  },
  {
    name: 'Clientes',
    go: '/cliente',
    order: 4,
    icon: <GroupAddOutlined color="secondary" />
  },
  {
    name: 'Profissionais ',
    go: '/profissional',
    order: 5,
    icon: <HowToRegOutlined color="secondary" />
  },
  {
    name: 'Produtos',
    go: '/produto',
    order: 6,
    icon: <LayersOutlined color="secondary" />
  },
  {
    name: 'Serviços',
    go: '/servico',
    order: 7,
    icon: <HowToVoteOutlined color="secondary" />
  },
  {
    name: 'Estoques',
    go: '/estoque',
    order: 8,
    icon: <StorefrontOutlined color="secondary" />
  },
]

export const iconsFooter: IconsProps[] = [
  {
    name: 'Sair',
    go: '/login',
    order: 2,
    icon: <ExitToAppOutlined color='error' />
  }
]
