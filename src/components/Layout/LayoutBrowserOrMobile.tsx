import { ReactNode } from "react"

import useWindowSize from "../../data/hooks/useWindowSize"
import LayoutBrowser from "./LayoutBrowser"
import LayoutMobile from "./LayoutMobile"

interface LayoutBrowserOrMobileProps {
  children?: ReactNode | undefined
}

function LayoutBrowserOrMobile({ children }: LayoutBrowserOrMobileProps) {
  const { width = 0 } = useWindowSize()

  if (width <= 426) {
    return <LayoutMobile>{children}</LayoutMobile>
  } else {
    return <LayoutBrowser>{children}</LayoutBrowser>
  }
}

export default LayoutBrowserOrMobile