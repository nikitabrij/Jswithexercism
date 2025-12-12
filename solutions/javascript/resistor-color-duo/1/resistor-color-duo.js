//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const COLORS =['black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue', 
  'violet',
  'grey', 
  'white']
export const decodedValue = (colors) => {
  const first2 = colors.slice(0,2);
  const digit = first2.map(color => COLORS.indexOf(color));

  return Number(digit.join(""));
};
