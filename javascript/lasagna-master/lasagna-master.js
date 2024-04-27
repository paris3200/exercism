/// <reference path="./global.d.ts" />

import { warn } from "console"

// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

/**
 * Returns string containing time left until cooking is done.
 *
 * @param {number} timer
  */
export function cookingStatus(timer){
  switch (timer){
    case 0:
      return "Lasagna is done."
    case undefined:
      return "You forgot to set the timer."
    default:
      return "Not done, please wait."
  }
}


/**
 * Returns number of minutes required for preparation.
 *
 * @param [strings] layers
 * @param {number} time
 * @return {number}
  */
export function preparationTime(layers, time){
  if (time == undefined){
    time = 2;
  }
  return layers.length * time
} 


/**
 * Returns object with the amount of noodles and sauce needed.
 *
 * @param [strings] layers
  */
export function quantities(layers) {
  const ingredients = {noodles: 0, sauce: 0}

  for (let i=0; i < layers.length; i++){
    switch (layers[i]){
      case "noodles":
        ingredients.noodles += 50
        break;
      case "sauce":
        ingredients.sauce += 0.2
        break;
    }
  }

  return ingredients
}


export function addSecretIngredient(friendsRecipe, myRecipie){
  myRecipie.push(friendsRecipe.slice(-1).pop())
}


export function scaleRecipe(recipe, portions){
  let scaleFactor = portions / 2;
  
  let scaledRecipe = {}
  for (const [key, value] of Object.entries(recipe)) {
    scaledRecipe[key] = value * scaleFactor;
  }

  return scaledRecipe
}
