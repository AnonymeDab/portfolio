/**
 * This stub is provided to make it straightforward to get started.
 */

export function twoFer(name?:string):string  {
  // ^                 ^   ^ this is called a return type; it's the type of the
  // ^                 ^     value that is returned from this function
  // ^                 ^
  // ^                 parameters go here
  // ^
  // allows the tests to import this function and call it
  // <-- Your code goes here. You may remove all the commentary in this file.
  const person = name ? name : "you";
  return `One for ${person}, one for me.`;

}

