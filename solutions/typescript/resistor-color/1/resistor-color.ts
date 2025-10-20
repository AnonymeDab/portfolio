// Liste des couleurs dans l’ordre de leur valeur
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

// Fonction qui renvoie la valeur numérique d’une couleur
export const colorCode = (color: string): number => {
  return COLORS.indexOf(color)
}
