export function isLeap(year: number = new Date().getFullYear()): boolean {
  if (year % 400 === 0) {
    console.log(`${year} was a leap year`);
    return true;
  } else if (year % 100 === 0) {
    console.log(`${year} was not a leap year`);
    return false;
  } else if (year % 4 === 0) {
    console.log(`${year} was a leap year`);
    return true;
  } else {
    console.log(`${year} was not a leap year`);
    return false;
  }
}
