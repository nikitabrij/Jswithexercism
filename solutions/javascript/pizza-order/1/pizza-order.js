/// <reference path="./global.d.ts" />
//
// @ts-check

/**
   * Determine the price of the pizza given the pizza and optional extras
   *
   * @param {Pizza} pizza name of the pizza to be made
   * @param {Extra[]} extras list of extras
   *
   * @returns {number} the price of the pizza
   */
  export function pizzaPrice(pizza, ...extras) {
    let baseprice = {Margherita: 7, Caprese: 9, Formaggio: 10};
    let extraprice = {ExtraSauce: 1, ExtraToppings: 2};

    let total = baseprice[pizza] || 0;

    extras.forEach(extra =>{
      total += extraprice[extra] || 0;
    });
    return total
  }


/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let total = 0;

  for (let order of pizzaOrders) {
    const {pizza, extras} = order;

    let pizzatotal = 0;
    let baseprice = {Margherita: 7, Caprese: 9, Formaggio: 10};
    let extraprice = {ExtraSauce: 1, ExtraToppings: 2};

    pizzatotal += baseprice[pizza] || 0;

    // add extra
    for (let extra of extras) {
      pizzatotal += extraprice[extra] || 0;
    }
    total += pizzatotal;
  }
  return total;
}
