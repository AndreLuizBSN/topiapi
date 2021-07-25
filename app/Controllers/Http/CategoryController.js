'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with beers
 */
const CommunicationExtService = use('App/Services/Communication/CommunicationExtService')
const GeneralService = use('App/Services/General/GeneralService')

class CategoryController {
  
  
/**
 * @swagger
 * /v1/categories:
 *   get:
 *     tags:
 *       - Categories
 *     summary: List all categories complete
 *     description: List all categories complete - Array;
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
 *                  thumb: (string),
 *                  description: (string),
 *                }
 *              ]
*/
  async index ({ request, response }) {

    var communicationExtService = new CommunicationExtService();
    var dados = await communicationExtService.getDataList('', 'CATEGORYLIST')
    
    var generalService = new GeneralService();
    dados = await generalService.convertCategories( dados );
    
    return response.send( dados )

  }
/**
 * @swagger
 * /v1/categoriesshort:
 *   get:
 *     tags:
 *       - Categories
 *     summary: List all categories - Just name
 *     description: List all categories - Just name - Array;
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Return
 *         example:
 *              [
 *                (string)
 *              ]
*/
  async short ({ request, response }) {

    var communicationExtService = new CommunicationExtService();
    var dados = await communicationExtService.getDataList('', 'CATEGORYLISTSHORT')
    
    var generalService = new GeneralService();
    dados = await generalService.convertShort( dados );
    
    return response.send( dados )
    
  }

}

module.exports = CategoryController
