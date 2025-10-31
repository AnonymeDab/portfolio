export function score(x: number, y: number): number {
  const d = Math.hypot(x, y); // plus moderne que Math.sqrt(x*x + y*y)
  return d > 10 ? 0 : d > 5 ? 1 : d > 1 ? 5 : 10;
}

