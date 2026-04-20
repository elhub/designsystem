import { useEffect, useRef, useState } from 'react'

const useScrollSpy = (ids: Array<string>, options: IntersectionObserverInit) => {
  const [activeIds, setActiveIds] = useState<Array<string>>([])
  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const elements: Array<HTMLElement | null> = ids.map((id: string) => document.getElementById(id))
    observer.current?.disconnect()
    observer.current = new IntersectionObserver((entries) => {
      setActiveIds(entries.filter((entry) => entry?.isIntersecting).map((entry) => entry.target.id))
    }, options)
    elements.forEach((el: HTMLElement | null) => {
      if (el) {
        observer.current?.observe(el)
      }
    })
    return () => observer.current?.disconnect()
  }, [ids, options])

  return activeIds
}

export default useScrollSpy
