'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with beers
 */
const CommunicationExtService = use('App/Services/Communication/CommunicationExtService')
const GeneralService = use('App/Services/General/GeneralService')

class IngredientController {
  
  /**
 * @swagger
 * /v1/ingredients:
 *   get:
 *     tags:
 *       - Ingredients
 *     summary: List all ingredients
 *     description: List all ingredients - Array;
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Return
 *         example:
 *              [
 *                {
 *                  id: (int),
 *                  name: (string),
 *                  description: (string),
 *                  type: (string),
 *                }
 *              ]
*/
  async index ({ request, response }) {

    var communicationExtService = new CommunicationExtService();
    var dados = await communicationExtService.getDataList('', 'INGREDIENTLIST')
    
    var generalService = new GeneralService();
    dados = await generalService.convertIngredients( dados );
    
    return response.send( dados )

  }

}

module.exports = IngredientController
