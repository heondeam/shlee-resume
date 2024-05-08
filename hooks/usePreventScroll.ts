import { useEffect } from 'react'

const usePreventScroll = (animationFinished: boolean) => {
  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault()
    }

    if (!animationFinished) {
      document.addEventListener('wheel', handleScroll, { passive: false })
      document.addEventListener('touchmove', handleScroll, { passive: false })
    }

    return () => {
      document.removeEventListener('wheel', handleScroll)
      document.removeEventListener('touchmove', handleScroll)
    }
  }, [animationFinished])
}

export default usePreventScroll
