import { useState, useEffect } from 'react'

export function useScrollDirection() {
  const [isScrollingUp, setIsScrollingUp] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const handleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }

      timeoutId = setTimeout(() => {
        const currentScrollY = window.scrollY
        const scrollDifference = Math.abs(currentScrollY - lastScrollY)
        const threshold = 50 // minimum scroll distance to trigger hide/show

        // Show navbar at the top of the page
        if (currentScrollY < 100) {
          setIsVisible(true)
          setIsScrollingUp(true)
        } 
        // Only update if we've scrolled more than the threshold
        else if (scrollDifference > threshold) {
          const isScrollUp = currentScrollY < lastScrollY
          setIsScrollingUp(isScrollUp)
          setIsVisible(isScrollUp)
        }

        setLastScrollY(currentScrollY)
      }, 100) // debounce time
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return { isScrollingUp, isVisible }
} 