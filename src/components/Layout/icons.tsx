import {
  ExitToAppOutlined,
  DateRangeOutlined,
  LayersOutlined,
  BookmarksOutlined,
  HowToVoteOutlined,
  StorefrontOutlined,
  EventAvailableOutlined,
  HomeOutlined,
  HowToRegOutlined,
  GroupAddOutlined
} from '@material-ui/icons'

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
    icon: <HomeOutlined />
  },
  {
    name: 'Agendas',
    go: '/agenda',
    order: 2,
    icon: <DateRangeOutlined />
  },
  {
    name: 'Vendas',
    go: '/venda',
    order: 3,
    icon: <EventAvailableOutlined />
  },
  {
    name: 'Clientes',
    go: '/cliente',
    order: 4,
    icon: <GroupAddOutlined />
  },
  {
    name: 'Profissionais ',
    go: '/profissional',
    order: 5,
    icon: <HowToRegOutlined />
  },
  {
    name: 'Produtos',
    go: '/produto',
    order: 6,
    icon: <LayersOutlined />
  },
  {
    name: 'Serviços',
    go: '/servico',
    order: 7,
    icon: <HowToVoteOutlined />
  },
  {
    name: 'Estoques',
    go: '/estoque',
    order: 8,
    icon: <StorefrontOutlined />
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
