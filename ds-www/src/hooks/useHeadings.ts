import React, { MutableRefObject, useState } from 'react'

export type HeadingElement = {
  id: string
  text: string
  level: number
}

const useHeadings = (ref: MutableRefObject<HTMLDivElement | null>, changingParam?: string) => {
  const [headings, setHeadings] = useState<Array<HeadingElement>>([])

  React.useEffect(() => {
    if (ref.current) {
      const elements: Array<HeadingElement> = Array.from(
        ref.current.querySelectorAll('h1.toc, h2.toc, h3.toc, h4.toc, h5.toc, h6.toc')
      )?.map((element) => ({
        id: element.id,
        text: element.textContent ?? '',
        level: Number(element.tagName.substring(1))
      }))
      setHeadings(elements)
    }
  }, [ref, changingParam])
  return headings
}

export default useHeadings
