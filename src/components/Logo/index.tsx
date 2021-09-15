import Image from 'next/image'

import { Theme } from '../../data/context/ThemeContext';
import useThemeContext from '../../data/hooks/useThemeContext';

function Logo() {
  const { type, onChangeTheme } = useThemeContext()

  return (
    <Image
      onClick={onChangeTheme}
      src={`${type === Theme.LIGT ? '/image/jws-112-175.png' : '/image/jws-white-112-175.png'}`}
      width={112}
      height={175}
    />
  )
}

export default Logo;