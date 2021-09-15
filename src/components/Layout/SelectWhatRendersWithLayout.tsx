import { useRouter } from 'next/router'
import { Fragment } from 'react'

import Layout from '../Layout_v2/Layout'

const notRenderWithLayout: string[] = ["/login"]

interface SelectWhatRendersWithlayoutProps {
  children: any
}

function SelectWhatRendersWithLayout({ children }: SelectWhatRendersWithlayoutProps) {
  const router = useRouter()

  if (notRenderWithLayout.includes(router.pathname)) {
    return <Fragment>{children}</Fragment>
  } else {
    return <Layout>{children}</Layout>
  }
}

export default SelectWhatRendersWithLayout