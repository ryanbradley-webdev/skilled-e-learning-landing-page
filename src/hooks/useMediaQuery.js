import { useState, useEffect } from 'react'

export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches)

  useEffect(() => {
    const listener = () => {
      setMatches(window.matchMedia(query).matches)
    }

    window.addEventListener('resize', listener)

    return () => window.removeEventListener('resize', listener)
  }, [query])

  return matches
}
