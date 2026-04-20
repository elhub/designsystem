import { useEffect } from 'react'

export * from './mergeRefs'

export type * from './OverridableComponent'
export * from './useId'
export * from './usePrevious'
export * from './useClientLayoutEffect'
export { default as composeEventHandlers } from './composeEventHandlers'

export const omit = (obj: object, props: string[]) =>
  Object.entries(obj)
    .filter(([key]) => !props.includes(key))
    .reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: value
      }),
      {}
    )

interface ListenerT {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  addEventListener: (name: string, handler: (event?: any) => void, ...args: any[]) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  removeEventListener: (name: string, handler: (event?: any) => void, ...args: any[]) => any
}

/* https://github.com/streamich/react-use/blob/master/src/useEvent.ts */
export const useEventListener = <T extends ListenerT>(
  name: Parameters<ListenerT['addEventListener']>[0],
  handler: Parameters<ListenerT['addEventListener']>[1],
  target: null | T | Window = typeof window !== 'undefined' ? window : null
): void => {
  useEffect(() => {
    if (!target) {
      return
    }
    target?.addEventListener(name, handler)
    return () => {
      target?.removeEventListener(name, handler)
    }
  }, [name, handler, target])
}
