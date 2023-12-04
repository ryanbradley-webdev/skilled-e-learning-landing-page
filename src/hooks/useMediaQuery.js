import { useState, useEffect } from 'react'

const getScreenSize = (mobileMax, tabletMax) => {
  if (window.matchMedia(mobileMax).matches) {
    return 'mobile'
  }

  if (window.matchMedia(tabletMax).matches) {
    return 'tablet'
  }

  return 'desktop'
}

export const useMediaQuery = (options) => {
  const [screenSize, setScreenSize] = useState(getScreenSize(options.mobileMax, options.tabletMax))

  useEffect(() => {
    const listener = () => {
      setScreenSize(getScreenSize(options.mobileMax, options.tabletMax))
    }

    window.addEventListener('resize', listener)

    return () => window.removeEventListener('resize', listener)
  }, [options])

  return screenSize
}
