import { Fragment, ReactNode } from "react"
import { useRouter } from "next/router"

import LayoutBrowserOrMobile from './LayoutBrowserOrMobile'

interface LayoutIfPathRenderProps {
  pathNotRenderLayout?: string[]
  children?: ReactNode | undefined
}

function LayoutIfPathRender({ children, pathNotRenderLayout }: LayoutIfPathRenderProps) {
  const router = useRouter()

  if (pathNotRenderLayout?.includes(router.pathname)) {
    return <Fragment>{children}</Fragment>
  } else {
    return <LayoutBrowserOrMobile>{children}</LayoutBrowserOrMobile>
  }
}

export default LayoutIfPathRender