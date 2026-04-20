/**
 * Calculates the visible years period based on the current year and range size.
 * @param currentYear - The current year.
 * @param rangeSize - The number of years to display.
 * @returns An object containing the start and end year.
 */
export const getVisibleYearsPeriod = (
  currentYear: number,
  rangeSize: number
): { startYear: number; endYear: number } => {
  const startYear = Math.floor(currentYear / rangeSize) * rangeSize + 1
  const endYear = startYear + rangeSize - 1
  return { startYear, endYear }
}
