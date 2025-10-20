export const COLORS: string[] = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"
]

export const decodedResistorValue = (
  colors: [string, string, string]
): string => {
  const [color1, color2, color3] = colors

  const first = COLORS.indexOf(color1)
  const second = COLORS.indexOf(color2)
  const mainValue = first * 10 + second

  const multiplier = COLORS.indexOf(color3)
  const value = mainValue * Math.pow(10, multiplier)

    if (value >= 1_000_000_000) {
    return `${value / 1_000_000_000} gigaohms`
  } else if (value >= 1_000_000) {
    return `${value / 1_000_000} megaohms`
  } else if (value >= 1_000) {
    return `${value / 1_000} kiloohms`
  } else {
    return `${value} ohms`
  }
}
