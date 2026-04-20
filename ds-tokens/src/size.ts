const reducer = 4
const getSizes = (sizes: number[]): Record<string, { value: string }> => {
  return sizes.reduce<Record<string, { value: string }>>((acc, curr) => {
    acc[curr.toString().replace('.', '-')] = { value: `${curr / reducer}rem` }
    return acc
  }, {})
}

const eds = {
  size: getSizes([
    0.25, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 18, 20, 24, 32, 48
  ])
}

export { eds }
