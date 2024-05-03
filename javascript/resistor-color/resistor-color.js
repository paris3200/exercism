//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { Number } from "core-js";


export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
]

export const colorCode = (firstBand, secondBand, multiplier) => {
  let digits = COLORS.indexOf(firstBand)

  if (secondBand) {
    digits += COLORS.indexOf(secondBand)
  }

  if (multiplier) {
    return Number(digits)*10**COLORS.indexOf(multiplier)
  }

  return Number(digits)
};

