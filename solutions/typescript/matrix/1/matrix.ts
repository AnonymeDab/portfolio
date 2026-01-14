export class Matrix {
  private data: number[][];

  constructor(matrix: string) {
    // On découpe chaque ligne
    const lines = matrix.split("\n");

    // On convertit chaque ligne en tableau de nombres
    this.data = [];
    for (let i = 0; i < lines.length; i++) {
      const parts = lines[i].split(" ");
      const row: number[] = [];

      for (let j = 0; j < parts.length; j++) {
        row.push(Number(parts[j]));
      }

      this.data.push(row);
    }
  }

  get rows(): number[][] {
    return this.data;
  }

  get columns(): number[][] {
    const cols: number[][] = [];

    // On regarde combien il y a de colonnes dans la première ligne
    const numberOfColumns = this.data[0].length;

    // Pour chaque colonne
    for (let i = 0; i < numberOfColumns; i++) {
      const column: number[] = [];

      // On parcourt chaque ligne
      for (let j = 0; j < this.data.length; j++) {
        column.push(this.data[j][i]);
      }

      cols.push(column);
    }

    return cols;
  }
}
