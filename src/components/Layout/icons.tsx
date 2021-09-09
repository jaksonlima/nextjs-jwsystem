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
